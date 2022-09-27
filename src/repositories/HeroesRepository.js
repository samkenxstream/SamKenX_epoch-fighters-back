const HeroModel = require('../models/Hero');

class HeroesRepository {
  getHeroesList() {
    return HeroModel.find();
  }

  addHeroItem(hero) {
    const command = new HeroModel(hero);
    command.save()
  }
}

module.exports = new HeroesRepository();
