const repository = require("../repositories/HeroesRepository");

const HeroService = {
  getHeroesList: () => {
    return repository.getHeroesList();
  },
  addHero: (hero) => {
    return repository.addHeroItem(hero);
  }
};

module.exports = HeroService;
