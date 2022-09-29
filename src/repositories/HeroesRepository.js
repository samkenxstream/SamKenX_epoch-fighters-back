const HeroModel = require('../models/Hero');

class HeroesRepository {
  getHeroesList() {
    return HeroModel.find();
  }

  getHeroByToken(token) {
    return HeroModel.findOne({token});
  }

  async addHeroItem(hero) {
    const command = new HeroModel(hero);
    return await command.save();
  }
}

module.exports = new HeroesRepository();
