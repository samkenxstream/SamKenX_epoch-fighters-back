const logger = function () {

  const log = function (msg) {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
      console.log(msg);
    }
  };

  return {
    log: log
  };

}();

module.exports = logger;
