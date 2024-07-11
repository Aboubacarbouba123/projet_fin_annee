const ReceptionParcRupture = require('../models/ReceptionParcRupture');

exports.createReceptionParcRupture = async (req, res) => {
    try {
        const { date, responsableParcRupture, id_chauffeur, essences, nombreBilles, codeBarre, sequence, longueurL, diametreGrosBoutDb, diametrePetitBoutDp, diametreMoyenDm, volumeBilleVb, destinationParc } = req.body;

        const newReceptionParcRupture = new ReceptionParcRupture({
            date,
            responsableParcRupture,
            id_chauffeur,
            essences,
            nombreBilles,
            codeBarre,
            sequence,
            longueurL,
            diametreGrosBoutDb,
            diametrePetitBoutDp,
            diametreMoyenDm,
            volumeBilleVb,
            destinationParc,
        });

        const savedReceptionParcRupture = await newReceptionParcRupture.save();
        
        res.status(201).json(savedReceptionParcRupture);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getReceptionParcRuptureById = async (req, res) => {
    try {
        const receptionParcRupture = await ReceptionParcRupture.findOne({ReceptionParcRuptureID:req.params.id})
            .populate('id_chauffeur', 'firstName lastName');

        if (!receptionParcRupture) {
            return res.status(404).json({ error: "ReceptionParcRupture not found" });
        }

        res.json(receptionParcRupture);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.updateReceptionParcRupture = async (req, res) => {
    try {
        const { date, responsableParcRupture, id_chauffeur, essences, nombreBilles, codeBarre, sequence, longueurL, diametreGrosBoutDb, diametrePetitBoutDp, diametreMoyenDm, volumeBilleVb, destinationParc } = req.body;

        const updateFields = {
            date,
            responsableParcRupture,
            id_chauffeur,
            essences,
            nombreBilles,
            codeBarre,
            sequence,
            longueurL,
            diametreGrosBoutDb,
            diametrePetitBoutDp,
            diametreMoyenDm,
            volumeBilleVb,
            destinationParc,
        };

        const receptionParcRupture = await ReceptionParcRupture.findOneAndUpdate(
            {ReceptionParcRuptureID:req.params.id},
            updateFields,
            { new: true }
        ).populate('id_chauffeur', 'firstName lastName');

        if (!receptionParcRupture) {
            return res.status(404).json({ error: "ReceptionParcRupture not found" });
        }

        res.json(receptionParcRupture);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteReceptionParcRupture = async (req, res) => {
    try {
        const receptionParcRupture = await ReceptionParcRupture.findOneAndDelete({ReceptionParcRuptureID:req.params.id});

        if (!receptionParcRupture) {
            return res.status(404).json({ error: "ReceptionParcRupture not found" });
        }

        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getAllReceptionParcRupture = async (req, res) => {
    try {
        const receptionParcRuptureList = await ReceptionParcRupture.find()
            .populate('id_chauffeur', 'firstName lastName');

        res.json(receptionParcRuptureList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
