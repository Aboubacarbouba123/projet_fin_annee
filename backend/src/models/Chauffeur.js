const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const { Schema, model } = mongoose;

const ChauffeurSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  numero: { type: Number, required: true },
  address: { type: String, required: true },
  matricule: { type: String, required: true },
});
ChauffeurSchema.plugin(AutoIncrement, { inc_field: "chauffeurID" });

const ChauffeurModel = model("Chauffeur", ChauffeurSchema);

module.exports = ChauffeurModel;
