const {Router} = require('express');
const heroService = require('../services/HeroService');

const router = Router();

router.get('/hero', async (req, res, next) => {
  try {
    const heroesList = await heroService.getHeroesList();
    res
      .status(200)
      .json(heroesList);
  } catch (e) {
    res
      .status(500)
      .json({error: e.message});
  }
});

router.post('/hero', async (req, res, next) => {
  const heroPayload = req.body;

  try {
    const heroItem = heroService.addHero(heroPayload);
    res
      .status(200)
      .json(hero);
  } catch (e) {
    res
      .status(500)
      .json({error: e.message});
  }
});

module.exports = router;
