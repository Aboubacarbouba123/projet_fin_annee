const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require("mongoose-sequence")(mongoose);

const CubageSchema = new Schema({
    receptionAtelier: { type: Date, required: true },
    volume: { type: Number, required: true },
    attributionNumColis: { type: String, required: true },
    localisation: { type: String, required: true },
});

const Cubage = mongoose.model('Cubage', CubageSchema);
CubageSchema.plugin(AutoIncrement, { inc_field: "CubageID" });
module.exports = Cubage;
