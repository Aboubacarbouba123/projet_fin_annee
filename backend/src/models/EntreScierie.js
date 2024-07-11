const mongoose = require("mongoose");
const AutoIncrements = require('mongoose-sequence')(mongoose);
const { Schema, model } = mongoose;

const EntreScierieSchema = new Schema({
  id_gardien: { type: Number, ref: 'Gardien', required: true },
  date_d_entree: { type: Date, required: true },
  heure: { type: String, required: true },
  id_voiture: { type: Number, ref: 'Voiture', required: true },
  id_chauffeur: { type: Number, ref: 'Chauffeur', required: true },
  contenu: { type: String, required: true },
  origine: { type: String, required: true },
});
EntreScierieSchema.plugin(AutoIncrements, { inc_field: 'EntreScierieID' });

const EntreScierieModel = model("EntreScierie", EntreScierieSchema);

module.exports = EntreScierieModel;
