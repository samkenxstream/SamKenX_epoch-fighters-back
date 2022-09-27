const mongoose = require('mongoose');
const plugins = require('./plugins');

const options = {
  promiseLibrary: global.Promise,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

class DataBase {
  constructor() {
    this.connection = null;
  }

  init(config) {
    console.log('Trying to connect to ' + config.host + '/' + config.database + ' MongoDB database');

    this.applyPlugins();
    const connectionString = `mongodb://${config.host}/${config.database}`;
    mongoose.connect(connectionString, options);
    this.connection = mongoose.connection;
    this.connection.on('error', console.error.bind(console, 'connection error:'));
    this.connection.once('open', function () {
      console.log('db connection open');
    });
    return this.connection;
  }

  applyPlugins() {
    plugins.forEach(plugin => mongoose.plugin(plugin));
  }

  close() {
    if (this.connection) {
      this.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
      });
    }
  }
}

module.exports = new DataBase();
