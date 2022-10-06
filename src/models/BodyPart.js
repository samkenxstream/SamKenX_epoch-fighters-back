const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecordMapper = require("../db/plugins/RecordMapper");

const bodyPartSchema = Schema({
  partId: {type: Number, required: true},
  part: {type: String, required: true},
  type: {type: String, required: true},
  rarity: {type: String, required: true},
  range: {type: [Number], required: true},
});

bodyPartSchema.plugin(RecordMapper);

const BodyPart = mongoose.model('body-parts', bodyPartSchema);

module.exports = BodyPart;
