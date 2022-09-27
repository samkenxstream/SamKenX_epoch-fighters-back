const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId, Number} = Schema.Types;

const BodyPartSchema = Schema({
    id: { type: Number, required: true },
    stat: { type: Number, required: true },
});

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

const heroSchema = Schema({
    tokenId: { type: Number, required: false },
    name: { type: String, required: true },
    attributes: { type: AttributesSchema, required: false }
});

const HeroModel = mongoose.model('heroes', heroSchema);

module.exports = HeroModel;
