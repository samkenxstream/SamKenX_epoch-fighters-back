const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bodyPartSchema = Schema({
  id: {type: String, required: true},
  part: {type: String, required: true},
  type: {type: String, required: true},
  rarity: {type: String, required: true},
  range: {type: [Number], required: true},
});

const BodyPart = mongoose.model('body-parts', bodyPartSchema);

module.exports = BodyPart;
