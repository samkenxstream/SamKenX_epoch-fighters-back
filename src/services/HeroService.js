const repository = require("../repositories/HeroesRepository");

class HeroService {
  getHeroesList() {
    return repository.getHeroesList();
  }

  addHero(hero) {
    return repository.addHeroItem(hero);
  }

  makeRandomAttributes() {

  }
}

module.exports = new HeroService();
