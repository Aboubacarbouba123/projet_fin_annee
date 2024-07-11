const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const { Schema, model } = mongoose;

// Définition du schéma pour "check parc de rupture"
const CheckParcRuptureSchema = new Schema({
    essence: { type: String, required: true },
    billes: [{
        dateLivraison: { type: Date, required: true },
        codeBarre: { type: String, required: true },
        longueur: { type: Number, required: true },
        diametreGrosBout: { type: Number, required: true },
        diametrePetitBout: { type: Number, required: true },
        volume: { type: Number, required: true }
    }]
});
CheckParcRuptureSchema.plugin(AutoIncrement, { inc_field: "CheckParcRuptureID" });
// Export du modèle
module.exports = mongoose.model('CheckParcRupture', CheckParcRuptureSchema);
