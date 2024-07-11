const mongoose = require("mongoose");
const AutoIncrements = require('mongoose-sequence')(mongoose);
const { Schema, model } = mongoose;

const GrumeSchema = new Schema({
    nom: {type: String, required: true},
    volumeTotal: {type :Number, required: true},
    volumeRetire: { type: Number, default: 0 }
});
GrumeSchema.plugin(AutoIncrements, { inc_field: 'grumeId' });

const GrumeModel = model("Grume", GrumeSchema);

module.exports = GrumeModel;