const userService = require('../services/UserService');

const checkAuth = async (req, res, next) => {
  const token = req.headers.token;
  const isActive = await userService.tokenIsActive(token);
  if (isActive) {
    next();
  } else {
    res
      .status(401)
      .json({error: "Please sign in first"});
  }
};

module.exports = checkAuth;
