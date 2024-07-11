const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const ColissageSchema = new Schema({
    receptionAtelier: { type: Date, required: true },
    longueurColis: { type: Number, required: true },
    largeurTotalColis: { type: Number, required: true },
    epaisseur: { type: Number, required: true },
    nombrePiecesTotal: { type: Number, required: true },
});

const Colissage = mongoose.model('Colissage', ColissageSchema);
ColissageSchema.plugin(AutoIncrement, { inc_field: "ColissageID" });
module.exports = Colissage;
