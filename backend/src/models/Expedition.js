const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ExpeditionSchema = new Schema({
    validationCommande: { type: Date, required: true },
    newId: { type: String, required: true },
    retraitParc: { type: String, required: true },
    nomChauffeur: { type: String, required: true },
    immatriculation: { type: String, required: true },
    destination: { type: String, required: true },
});

const Expedition = mongoose.model('Expedition', ExpeditionSchema);
ExpeditionSchema.plugin(AutoIncrement, { inc_field: "ExpeditionID" });
module.exports = Expedition;
