const HeroModel = require('../models/Hero');

const HeroesRepository = {

  getHeroesList: async () => {
    return await HeroModel.find();
  },

  addHeroItem: async (hero) => {
    const command = new HeroModel(hero);
    await command.save()
  }
};

module.exports = HeroesRepository;
