const mongoose = require("mongoose");
const AutoIncrements = require('mongoose-sequence')(mongoose);
const { Schema, model } = mongoose;

const PreparationBilleSchema = new Schema({
    codeBarreBille: { type: String, required: true },
    newId: { type: String, required: true },
    newLongueur: { type: Number, required: true },
    newDp: { type: Number, required: true },
    newDg: { type: Number, required: true }
});
PreparationBilleSchema.plugin(AutoIncrements, { inc_field: 'PreparationBilleId' });
const PreparationBille = mongoose.model('PreparationBille', PreparationBilleSchema);

module.exports = PreparationBille;
