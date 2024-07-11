const Colissage = require('../models/Colissage');

exports.createColissage = async (req, res) => {
    try {
        const { receptionAtelier, longueurColis, largeurTotalColis, epaisseur, nombrePiecesTotal } = req.body;

        const newColissage = new Colissage({
            receptionAtelier,
            longueurColis,
            largeurTotalColis,
            epaisseur,
            nombrePiecesTotal,
        });

        const savedColissage = await newColissage.save();
        
        res.status(201).json(savedColissage);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
