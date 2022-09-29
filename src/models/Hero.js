const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId, Number} = Schema.Types;
const RecordMapper = require("../db/plugins/RecordMapper");
const IdRemover = require("../db/plugins/IdRemover");

const BodyPartSchema = Schema({
    id: { type: Number, required: true },
    stat: { type: Number, required: true },
});
BodyPartSchema.plugin(IdRemover);

const AttributesSchema = Schema({
    torso: BodyPartSchema,
    horns: BodyPartSchema,
    arms: BodyPartSchema,
    eyes: BodyPartSchema,
    legs: BodyPartSchema,
    tail: BodyPartSchema,
    ability1: Number,
    ability2: Number
});
AttributesSchema.plugin(IdRemover);

const HeroSchema = Schema({
    tokenId: { type: Number, required: false },
    userId: {type: ObjectId, required: true},
    name: { type: String, required: true },
    attributes: { type: AttributesSchema, required: true }
});
HeroSchema.plugin(RecordMapper);

const HeroModel = mongoose.model('heroes', HeroSchema);

module.exports = HeroModel;
