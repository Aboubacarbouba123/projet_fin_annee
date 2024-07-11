const EntreScierie = require('../models/EntreScierie');
const Gardien = require('../models/Gardien');
const Voiture = require('../models/Voiture');
const Chauffeur = require('../models/Chauffeur')
exports.createEntreScierie = async (req, res) => {
    try {
        const { id_gardien, date_d_entree, heure, id_voiture, id_chauffeur, contenu, origine } = req.body;

        const newEntreScierie = new EntreScierie({
            id_gardien,
            date_d_entree,
            heure,
            id_voiture,
            id_chauffeur,
            contenu,
            origine,
        });

        const savedEntreScierie = await newEntreScierie.save();
        res.status(201).json(savedEntreScierie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getEntreScierieById = async (req, res) => {
    try {
        const entreScierie = await EntreScierie.findOne({ EntreScierieID: req.params.id }).exec();

        if (!entreScierie) {
            return res.status(404).json({ error: "EntreScierie not found" });
        }

        const gardien = await Gardien.findOne({ GardienID: entreScierie.id_gardien }).exec();
        const voiture = await Voiture.findOne({ VoitureID: entreScierie.id_voiture }).exec();
        const chauffeur = await Chauffeur.findOne({ ChauffeurID: entreScierie.id_chauffeur }).exec();

        if (gardien) entreScierie._doc.gardien = gardien;
        if (voiture) entreScierie._doc.voiture = voiture;
        if (chauffeur) entreScierie._doc.chauffeur = chauffeur;

        res.json(entreScierie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.updateEntreScierie = async (req, res) => {
    try {
        const { id_gardien, date_d_entree, heure, id_voiture, id_chauffeur, contenu, origine } = req.body;

        const updateFields = {};
        if (id_gardien !== undefined) updateFields.id_gardien = id_gardien;
        if (date_d_entree !== undefined) updateFields.date_d_entree = date_d_entree;
        if (heure !== undefined) updateFields.heure = heure;
        if (id_voiture !== undefined) updateFields.id_voiture = id_voiture;
        if (id_chauffeur !== undefined) updateFields.id_chauffeur = id_chauffeur;
        if (contenu !== undefined) updateFields.contenu = contenu;
        if (origine !== undefined) updateFields.origine = origine;

        const entreScierie = await EntreScierie.findOneAndUpdate(
            { EntreScierieID: req.params.id },
            updateFields,
            { new: true }
        );

        if (!entreScierie) {
            return res.status(404).json({ error: "EntreScierie not found" });
        }

        res.json(entreScierie);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteEntreScierie = async (req, res) => {
    try {
        const entreScierie = await EntreScierie.findOneAndDelete({ EntreScierieID: req.params.id });

        if (!entreScierie) {
            return res.status(404).json({ error: "EntreScierie not found" });
        }

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getAllEntreScierie = async (req, res) => {
    try {
        const entreScieries = await EntreScierie.find().exec();

        const entreScieriesWithDetails = await Promise.all(entreScieries.map(async (entreScierie) => {
            const gardien = await Gardien.findOne({ GardienID: entreScierie.id_gardien }).exec();
            const voiture = await Voiture.findOne({ VoitureID: entreScierie.id_voiture }).exec();
            const chauffeur = await Chauffeur.findOne({ ChauffeurID: entreScierie.id_chauffeur }).exec();

            if (gardien) entreScierie._doc.gardien = gardien;
            if (voiture) entreScierie._doc.voiture = voiture;
            if (chauffeur) entreScierie._doc.chauffeur = chauffeur;

            return entreScierie;
        }));

        res.json(entreScieriesWithDetails);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};