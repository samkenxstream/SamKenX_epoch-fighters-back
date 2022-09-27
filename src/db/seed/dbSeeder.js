const dataInitializer = require('./DataInitializer');
const config = require('../../../config/config.development.json');
const db = require('../DataBase');

db.init(config.databaseConfig);

console.log('Initializing Data');
dataInitializer.initializeData(function(err) {
  if (err) {
      console.log(err);
  }
  else {
      console.log('Data Initialized!')
  }
});

// node src/db/seed/dbSeeder.js
