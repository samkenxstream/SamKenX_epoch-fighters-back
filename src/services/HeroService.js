const { uniqueNamesGenerator, adjectives, colors, animals, names } = require('unique-names-generator');
const repository = require("../repositories/HeroesRepository");
const userRepository = require("../repositories/UsersRepository");
const bodyPartsRepository = require("../repositories/BodyPartRepository");
const bodyPartTypes = require("../constants/body-part-types");
const abilities = require("../constants/abilities-types");

class HeroService {
  getHeroesList() {
    return repository.getHeroesList();
  }

  getHero(id) {
    return repository.getHeroById(id);
  }

  async getHeroByUser(address) {
    const user = await userRepository.getUserByAddress(address);
    return repository.getHeroesListByUser(user.id);
  }

  async addHero(token) {
    const user = await userRepository.getUserByToken(token);
    const hero = {
      name: await this.createHeroName(),
      userId: user.id,
      attributes: await this.createAttributes(user.rate)
    }

    return await repository.addHeroItem(hero);
  }

  async createHeroName() {
    let name = this.createUniqueName();
    while (await repository.heroIsExisted(name)) {
      name = this.createUniqueName();
    }
    return name;
  }

  createUniqueName() {
    return uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals, names],
      length: 4,
      separator: ' ',
      style: 'capital'
    });
  }

  async createAttributes(rate) {
    const attributes = await this.getRandomBodyParts(rate);
    const abilitiesPart = this.getRandomAbilities();

    return {...attributes, ...abilitiesPart};
  }

  async getRandomBodyParts(rate) {
    const bodyParts = Object.keys(bodyPartTypes);
    const attributes = {};
    for (const partName of bodyParts) {
      const bodyPart = await bodyPartsRepository.getByTypeAndLevel(bodyPartTypes[partName], rate);
      const [startRange, endRange] = bodyPart.range;
      const random = this.getRandom(startRange, endRange);

      attributes[bodyPartTypes[partName]] = {
        id: bodyPart.partId,
        stat: random
      }
    }
    return attributes;
  }

  getRandomAbilities() {
    const abilitiesPart = {};

    const maxAbilityNumber = this.getMaxAbilityNumber();
    abilitiesPart.ability1 = this.getRandom(0, maxAbilityNumber);
    let ability2 = this.getRandom(0, maxAbilityNumber);
    while (ability2 === abilitiesPart.ability1) {
      ability2 = this.getRandom(0, maxAbilityNumber);
    }
    abilitiesPart.ability2 = ability2;

    return abilitiesPart;
  }

  getMaxAbilityNumber() {
    let max = 0;
    for(const key of Object.keys(abilities)) {
      if(abilities[key] > max) {
        max = abilities[key];
      }
    }
    return max;
  }

  getRandom(min, max) {
    return min + Math.ceil(Math.random() * (max - min));
  }
}

module.exports = new HeroService();
