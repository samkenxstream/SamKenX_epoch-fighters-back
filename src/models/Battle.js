const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = Schema.Types;
const RecordMapper = require("../db/plugins/RecordMapper");

const BattleSchema = Schema({
  heroId: {type: ObjectId, required: true},
  enemyId: {type: ObjectId, required: true},
  heroWon: {type: Boolean, required: true}
});
BattleSchema.plugin(RecordMapper);

const BattleModel = mongoose.model('battles', BattleSchema);

module.exports = BattleModel;
