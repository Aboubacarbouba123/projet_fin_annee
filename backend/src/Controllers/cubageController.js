const Cubage = require('../models/Cubage');

exports.createCubage = async (req, res) => {
    try {
        const { receptionAtelier, volume, attributionNumColis, localisation } = req.body;

        const newCubage = new Cubage({
            receptionAtelier,
            volume,
            attributionNumColis,
            localisation,
        });

        const savedCubage = await newCubage.save();
        
        res.status(201).json(savedCubage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
