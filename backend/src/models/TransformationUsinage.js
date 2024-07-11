const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrements = require('mongoose-sequence')(mongoose);

const TransformationUsinageSchema = new Schema({
    date: { type: Date, required: true },
    chaineProduction: { type: String, required: true },
    ReceptionParcRuptureID: { type: Number, ref: 'ReceptionParcRupture', required: true },
});

TransformationUsinageSchema.plugin(AutoIncrements, { inc_field: 'TransformationUsinageId' });

const TransformationUsinage = mongoose.model('TransformationUsinage', TransformationUsinageSchema);

module.exports = TransformationUsinage;
