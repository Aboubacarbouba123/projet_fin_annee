const mongoose = require("mongoose");
const AutoIncrements = require('mongoose-sequence')(mongoose);
const { Schema, model } = mongoose;

const PackSchema = new Schema({
    nom: {type: String, required: true},
    matricule: {type :String, required: true},
    localisation: { type: String, default: 0 }
});
PackSchema.plugin(AutoIncrements, { inc_field: 'packId' });

const PackModel = model("Pack", PackSchema);

module.exports = PackModel;