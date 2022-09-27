const {Router} = require('express');
const service = require('../services/BodyPartService');
const checkAuth = require('../utils/auth');

const router = Router();

router.use(checkAuth);

router.get('/', async (req, res, next) => {
  try {
    const bodyPartsList = await service.getBodyPartList();
    res
      .status(200)
      .json(bodyPartsList);
  } catch (e) {
    res
      .status(500)
      .json({error: e.message});
  }
});

module.exports = router;
