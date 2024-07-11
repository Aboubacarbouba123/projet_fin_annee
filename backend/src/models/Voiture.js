const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const { Schema, model } = mongoose;

const VoitureSchema = new Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: { type: Number, required: true },
    matricule: { type: String, required: true },
    chauffeurID: { type: Number, ref: 'Chauffeur', required: true }
  });
  VoitureSchema.plugin(AutoIncrement, { inc_field: "VoitureID" });
  const VoitureModel = model("Voiture", VoitureSchema);
  module.exports = VoitureModel;