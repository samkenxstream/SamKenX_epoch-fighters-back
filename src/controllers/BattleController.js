const {Router} = require('express');
const battleService = require('../services/BattleService');
const checkAuth = require('../utils/auth');

const router = Router();

router.use(checkAuth);

router.get('/', async (req, res, next) => {
  try {
    const battlesList = await battleService.getBattlesList();
    res
      .status(200)
      .json(battlesList);
  } catch (e) {
    res
      .status(500)
      .json({error: e.message});
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const battleId = req.params.id;
    const battle = await battleService.getBattle(battleId);
    res
      .status(200)
      .json(battle);
  } catch (e) {
    res
      .status(500)
      .json({error: e.message});
  }
});

router.post('/', async (req, res, next) => {
  try {
    const battleRaw = {
      heroId: req.body.heroId,
      enemyId: req.body.enemyId,
      heroWon: req.body.heroWon
    };
    const battleItem = await battleService.addBattle(battleRaw);
    res
      .status(201)
      .json(battleItem);
  } catch (e) {
    res
      .status(500)
      .json({error: e.message});
  }
});

module.exports = router;
