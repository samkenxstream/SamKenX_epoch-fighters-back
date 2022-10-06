const HeroController = require('./HeroController');
const AuthController = require('./UserController');
const BodyPartsController = require('./BodyPartsController');
const NftController = require('./NftController');

module.exports =  {
  "hero" : HeroController,
  "user": AuthController,
  "bodypart": BodyPartsController,
  "nft": NftController
};
