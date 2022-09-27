const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  address: {type: String, required: true},
  //address: {type: String, index: {unique: true, dropDups: true}},
  token: {type: String, required: false},
  expireAt: {type: String, required: false},
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;
