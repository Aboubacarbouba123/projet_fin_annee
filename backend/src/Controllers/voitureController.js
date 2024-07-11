const Voiture = require('../models/Voiture');
const Chauffeur = require("../models/Chauffeur");

exports.createVoiture = async (req, res) => {
    try {
        const { make, model, year, chauffeurID,matricule } = req.body;
        const newVoiture = new Voiture({ make, model, year, chauffeurID,matricule });

        const savedVoiture = await newVoiture.save();
        console.log(savedVoiture)
        res.status(201).json(savedVoiture);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getVoitureById = async (req, res) => {
    try {
        const voiture = await Voiture.findOne({ VoitureID: req.params.id }).exec();
        
        if (!voiture) {
            return res.status(404).json({ error: "Voiture not found" });
        }

        const chauffeur = await Chauffeur.findOne({ ChauffeurID: voiture.chauffeurID }).exec();
        if (chauffeur) {
            voiture._doc.chauffeur = chauffeur; 
        }

        res.json(voiture);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.updateVoiture = async (req, res) => {
    try {
        const { make, model, year, chauffeurID } = req.body;
        const updateFields = {};
        if (make !== undefined) updateFields.make = make;
        if (model !== undefined) updateFields.model = model;
        if (year !== undefined) updateFields.year = year;
        if (chauffeurID !== undefined) updateFields.chauffeurID = chauffeurID;

        const voiture = await Voiture.findOneAndUpdate({VoitureID:req.params.id}, updateFields, { new: true });
        if (!voiture) {
            return res.status(404).json({ error: "Voiture not found" });
        }
        res.json(voiture);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteVoiture = async (req, res) => {
    try {
        const voiture = await Voiture.findOneAndDelete({VoitureID:req.params.id});
        if (!voiture) {
            return res.status(404).json({ error: "Voiture not found" });
        }
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getAllVoitures = async (req, res) => {
    try {
        const voitures = await Voiture.find().exec();
        
        const voituresWithChauffeurs = await Promise.all(voitures.map(async (voiture) => {
            const chauffeur = await Chauffeur.findOne({ ChauffeurID: voiture.chauffeurID }).exec();
            if (chauffeur) {
                voiture._doc.chauffeur = chauffeur; // Ajoute les informations du chauffeur à chaque voiture
            }
            return voiture;
        }));

        res.json(voituresWithChauffeurs);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
