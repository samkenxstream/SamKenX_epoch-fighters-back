const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecordMapper = require("../db/plugins/RecordMapper");

const userSchema = Schema({
  address: {type: String, required: true},
  rate: {type: Number, require: true, default: 1},
  token: {type: String, required: false},
  expireAt: {type: String, required: false},
});

userSchema.plugin(RecordMapper);

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;
