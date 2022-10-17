const {Router} = require('express');
const enemyService = require('../services/EnemyService');
const checkAuth = require('../utils/auth');

const router = Router();

router.use(checkAuth);

router.get('/', async (req, res, next) => {
  try {
    const enemiesList = await enemyService.getEnemiesList();
    res
      .status(200)
      .json(enemiesList);
  } catch (e) {
    res
      .status(500)
      .json({error: e.message});
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const enemyId = req.params.id;
    const enemy = await enemyService.getEnemy(enemyId);
    res
      .status(200)
      .json(enemy);
  } catch (e) {
    res
      .status(500)
      .json({error: e.message});
  }
});

router.post('/', async (req, res, next) => {
  try {
    const token = req.headers.token;
    const enemyItem = await enemyService.addEnemy(token);
    res
      .status(201)
      .json(enemyItem);
  } catch (e) {
    res
      .status(500)
      .json({error: e.message});
  }
});

module.exports = router;
