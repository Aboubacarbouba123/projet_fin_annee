const Gardien = require('../models/Gardien');

exports.createGardien = async (req, res) => {
    try {
        const { firstName, lastName, email, numero, address, matricule } = req.body;
        const newGardien = new Gardien({
            firstName,
            lastName,
            email,
            numero,
            address,
            matricule
        });

        const savedGardien = await newGardien.save();
        res.status(201).json(savedGardien);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getGardienById = async (req, res) => {
    try {
        const gardien = await Gardien.findOne({GardienID:req.params.id});
        if (!gardien) {
            return res.status(404).json({ error: "Gardien not found" });
        }
        res.json(gardien);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.updateGardien = async (req, res) => {
    try {
        const { firstName, lastName, email, numero, address, matricule } = req.body;

        const updateFields = {};
        if (firstName !== undefined) updateFields.firstName = firstName;
        if (lastName !== undefined) updateFields.lastName = lastName;
        if (email !== undefined) updateFields.email = email;
        if (numero !== undefined) updateFields.numero = numero;
        if (address !== undefined) updateFields.address = address;
        if (matricule !== undefined) updateFields.matricule = matricule;

        const gardien = await Gardien.findOneAndUpdate(
            {GardienID:req.params.id},
            updateFields,
            { new: true }
        );

        if (!gardien) {
            return res.status(404).json({ error: "Gardien not found" });
        }

        res.json(gardien);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteGardien = async (req, res) => {
    try {
        const gardien = await Gardien.findOneAndDelete({GardienID:req.params.id});
        if (!gardien) {
            return res.status(404).json({ error: "Gardien not found" });
        }
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.getAllGardiens = async (req, res) => {
    try {
        const gardiens = await Gardien.find();
        res.json(gardiens);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};