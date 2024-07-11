const Chauffeur = require("../models/Chauffeur");
exports.createChauffeur= async (req, res) => {
   
      const { firstName,lastName,email,numero,address,matricule } = req.body;
      console.log(firstName,lastName,email,numero,address,matricule);
  
      try {       
        const existingData = await Chauffeur.findOne({ email });
        if (existingData) {
          return res.status(400).json({ error: "Cet e-mail est déjà utilisé" });
        }
        const newChauffeur = new Chauffeur({
          firstName,
          lastName,
          email,
          numero,
          address,
          matricule,
        });
       
        await newChauffeur.save();
        res.status(201).json({ message: "Données enregistrées avec succès" });
      } catch (error) {
        console.error(error)
        res
          .status(500)
          .json({
            error: "Une erreur est survenue lors de l'enregistrement des données",
          });
      }
  };
  exports.getAllChauffeur = async (req, res) => {
    try {
      const chauffeur = await Chauffeur.find();
      res.json(chauffeur);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  exports.getChauffeurById = async (req, res) => {
    try {
        const chauffeur = await Chauffeur.findOne({ chauffeurID: req.params.id });
        if (!chauffeur) {
          return res.status(404).json({ error: "Chauffeur not found" });
        }
        res.json(chauffeur);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
};
exports.updateChauffeur = async (req, res) => {
    try {
        const { firstName, lastName, email, numero, address, matricule } = req.body;

        const updateFields = {};
        if (firstName !== undefined) updateFields.firstName = firstName;
        if (lastName !== undefined) updateFields.lastName = lastName;
        if (email !== undefined) updateFields.email = email;
        if (numero !== undefined) updateFields.numero = numero;
        if (address !== undefined) updateFields.address = address;
        if (matricule !== undefined) updateFields.matricule = matricule;

        const chauffeur = await Chauffeur.findOneAndUpdate(
            { chauffeurID: req.params.id },
            updateFields,
            { new: true }  // Cette option renvoie le document mis à jour
        );

        if (!chauffeur) {
            return res.status(404).json({ error: "Chauffeur not found" });
        }

        res.json(chauffeur);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deleteChauffeur = async (req, res) => {
    try {
        const chauffeur = await Chauffeur.findOneAndDelete({ chauffeurID: req.params.id });
        console.log(chauffeur)
        if (!chauffeur) {
          return res.status(404).json({ error: "Chauffeur not found" });
        }
    
        res.json({ message: "Chauffeur deleted successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
};