const HeroController = require('./HeroController');
const AuthController = require('./UserController');
const BodyPartsController = require('./BodyPartsController');

module.exports =  {
  "hero" : HeroController,
  "user": AuthController,
  "bodypart": BodyPartsController
};
