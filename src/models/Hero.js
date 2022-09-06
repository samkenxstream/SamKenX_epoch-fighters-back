const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId, Number} = Schema.Types;

const characteristicsSchema = Schema({
    strength: { type: Number, required: false },
    speed: { type: Number, required: false },
    charisma: { type: Number, required: false },
});

const heroSchema = Schema({
    id: { type: ObjectId, required: true },
    name: { type: String, required: true },
    characteristics: characteristicsSchema
});

const HeroModel = mongoose.model('hero', heroSchema);

module.exports = HeroModel;
