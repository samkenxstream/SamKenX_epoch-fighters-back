const HeroController = require('./HeroController');
const AuthController = require('./UserController');

module.exports =  {
  "hero" : HeroController,
  "user": AuthController
};
