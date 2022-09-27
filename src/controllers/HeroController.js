const {Router} = require('express');
const heroService = require('../services/HeroService');
const checkAuth = require('../utils/auth');

const router = Router();

router.use(checkAuth);

router.get('/', async (req, res, next) => {
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

router.post('/', async (req, res, next) => {
  const heroPayload = req.body;
  try {
    const heroItem = heroService.addHero(heroPayload);
    res
      .status(200)
      .json(heroItem);
  } catch (e) {
    res
      .status(500)
      .json({error: e.message});
  }
});

module.exports = router;
