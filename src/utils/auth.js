const userService = require('../services/UserService');

const checkAuth = async (req, res, next) => {
  const token = req.headers.token;
  if(userService.tokenIsActive(token)) {
    next();
  } else {
    res
      .status(401)
      .json({error: "Please sign in first"});
  }
};
