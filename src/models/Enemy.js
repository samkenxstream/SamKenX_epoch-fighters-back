const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const RecordMapper = require("../db/plugins/RecordMapper");
const {AttributesSchema} = require('./AttributesSchema');

const EnemySchema = Schema({
  name: {type: String, required: true},
  attributes: {type: AttributesSchema, required: true}
});
EnemySchema.plugin(RecordMapper);

const EnemyModel = mongoose.model('enemies', EnemySchema);

module.exports = EnemyModel;
