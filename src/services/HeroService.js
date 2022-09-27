const repository = require("../repositories/HeroesRepository");

class HeroService {
  getHeroesList() {
    return repository.getHeroesList();
  }

  addHero(hero) {
    return repository.addHeroItem(hero);
  }
}

module.exports = new HeroService();
