const Pack = require("../models/Pack");
exports.createPack= async (req, res) => {
   
      const { nom,matricule,localisation } = req.body;
      console.log(nom,matricule,localisation);
  
      try {       
        const existingData = await Pack.findOne({ matricule });
        if (existingData) {
          return res.status(400).json({ error: "Ce matricule est déjà utilisé" });
        }
        const newPack = new Pack({
         nom,
         localisation,
          matricule,
        });
       
        await newPack.save();
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
  exports.getAllPack = async (req, res) => {
    try {
      const pack = await Pack.find();
      res.json(pack);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

  exports.getPackById = async (req, res) => {
    try {
        const pack = await Pack.findOne({ packId: req.params.id });
        if (!pack) {
          return res.status(404).json({ error: "Pack not found" });
        }
        res.json(pack);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
};
exports.updatePack = async (req, res) => {
    try {
        const { nom,loaclisation, matricule } = req.body;

        const updateFields = {};
        if (nom !== undefined) updateFields.nom = nom;
        if (loaclisation !== undefined) updateFields.loaclisation = loaclisation;
        if (matricule !== undefined) updateFields.matricule = matricule;

        const pack = await Pack.findOneAndUpdate(
            { packId: req.params.id },
            updateFields,
            { new: true }  // Cette option renvoie le document mis à jour
        );

        if (!pack) {
            return res.status(404).json({ error: "Pack not found" });
        }

        res.json(pack);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};

exports.deletePack = async (req, res) => {
    try {
        const pack = await Pack.findOneAndDelete({ packId: req.params.id });
        console.log(pack)
        if (!pack) {
          return res.status(404).json({ error: "Pack not found" });
        }
    
        res.json({ message: "Pack deleted successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
};