const TransformationUsinage = require('../models/TransformationUsinage');
const ReceptionParcRupture = require('../models/ReceptionParcRupture');

exports.createTransformationUsinage = async (req, res) => {
    try {
        const { date, chaineProduction, ReceptionParcRuptureID } = req.body;

        // Vérifiez si l'ID de ReceptionParcRupture existe
        const receptionParcRupture = await ReceptionParcRupture.findOne({ ReceptionParcRuptureID });
        if (!receptionParcRupture) {
            return res.status(404).json({ error: "ReceptionParcRupture not found" });
        }

        const newTransformationUsinage = new TransformationUsinage({
            date,
            chaineProduction,
            ReceptionParcRuptureID,
        });

        const savedTransformationUsinage = await newTransformationUsinage.save();

        res.status(201).json(savedTransformationUsinage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
