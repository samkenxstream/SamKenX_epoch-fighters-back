const HeroController = require('./HeroController');
const EnemyController = require('./EnemyController');
const AuthController = require('./UserController');
const BodyPartsController = require('./BodyPartsController');
const NftController = require('./NftController');
const BattleController = require('./BattleController');

module.exports =  {
  "hero" : HeroController,
  "enemy" : EnemyController,
  "user": AuthController,
  "bodypart": BodyPartsController,
  "nft": NftController,
  "battle": BattleController
};
