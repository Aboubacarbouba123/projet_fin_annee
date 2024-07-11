const Expedition = require('../models/Expedition');

exports.createExpedition = async (req, res) => {
    try {
        const { validationCommande, newId, retraitParc, nomChauffeur, immatriculation, destination } = req.body;

        const newExpedition = new Expedition({
            validationCommande,
            newId,
            retraitParc,
            nomChauffeur,
            immatriculation,
            destination,
        });

        const savedExpedition = await newExpedition.save();
        
        res.status(201).json(savedExpedition);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
