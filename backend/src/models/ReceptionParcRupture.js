const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const { Schema, model } = mongoose;

const ReceptionParcRuptureSchema = new Schema({
    date: { type: Date, required: true },
    responsable: { type: String, required: true },
    id_chauffeur: { type: Number, ref: 'Chauffeur', required: true },
    essences: { type: String, required: true },
    nombre_de_billes: { type: Number, required: true },
    code_a_barre: { type: String, required: true, unique: true },
    sequence: { type: String, required: true },
    longueur: { type: Number, required: true },
    diametre_gros_bout: { type: Number, required: true },
    diametre_petit_bout: { type: Number, required: true },
    diametre_moyen: { type: Number },  // Calculé: (Dg + Dp) / 2
    volume_bille: { type: Number },    // Calculé: (π/4) * (Dm^2) * L
    destination: { type: String, required: true }
});

ReceptionParcRuptureSchema.plugin(AutoIncrement, { inc_field: "ReceptionParcRuptureID" });

ReceptionParcRuptureSchema.pre('save', function (next) {
    this.diametre_moyen = (this.diametre_gros_bout + this.diametre_petit_bout) / 2;
    this.volume_bille = (Math.PI / 4) * Math.pow(this.diametre_moyen, 2) * this.longueur;
    next();
});

ReceptionParcRuptureSchema.pre('findOneAndUpdate', function (next) {
    const update = this.getUpdate();
    if (update.diametre_gros_bout !== undefined && update.diametre_petit_bout !== undefined && update.longueur !== undefined) {
        update.diametre_moyen = (update.diametre_gros_bout + update.diametre_petit_bout) / 2;
        update.volume_bille = (Math.PI / 4) * Math.pow(update.diametre_moyen, 2) * update.longueur;
    }
    this.setUpdate(update);
    next();
});

const ReceptionParcRuptureModel = model("ReceptionParcRupture", ReceptionParcRuptureSchema);

module.exports = ReceptionParcRuptureModel;
