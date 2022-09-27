const fs = require('fs');
const path = require('path');
const heroesRepository = require('../../repositories/HeroesRepository');
const bodyPartRepository = require('../../repositories/BodyPartRepository');

class DataInitializer {

  initializeData(callback) {
    this.addBodyParts();
    // const hero1 = {
    //   id: 'b20a876d-9ab8-44d4-87b6-d578a7ba0351',
    //   name: 'Mannimarco "King of Worms"',
    //   characteristics: {
    //     strength: 10,
    //     speed: 15,
    //     charisma: 20,
    //   }
    // };
    // const hero2 = {
    //   id: '911eea67-88ab-47f7-832b-c6b899d9aef9',
    //   name: 'Ysgramor "The harbinger of us all"',
    //   characteristics: {
    //     strength: 34,
    //     speed: 17,
    //     charisma: 15,
    //   }
    // };
    // repository.addHeroItem(hero1);
    // repository.addHeroItem(hero2);
    //
    // callback();
  }

  async addBodyParts() {
    const filename = 'data/FuzzyFighters-Variables-FighterComponents.csv';
    const filepath = path.join(__dirname, '/'+filename)
    try {
      const data = fs.readFileSync(filepath, 'utf8');
      const records = data.split(/\r?\n/);
      for(const str of records) {
        if(str.length > 0) {
          console.log("------------------");
          const [, partType, nameId, rarity, statRange] = str.split(',');
          const [part, valueType] = partType.split(" - ");
          const [, localId] = nameId.split(" ");
          const [rangeStart, rangeEnd] = statRange.split("-");

          console.log(localId, part, valueType, rarity, rangeStart, rangeEnd);
          const bodyPart = {
            id: localId,
            part,
            type: valueType,
            rarity,
            range: [rangeStart, rangeEnd],
          }

          await bodyPartRepository.addBodyPart(bodyPart);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = new DataInitializer();
