const Grume = require('../models/Grume');

exports.createGrume = async (req, res) => {
  try {
    const { nom, volumeTotal } = req.body;

    const newGrume = new Grume({
      nom,
      volumeTotal,
    });

    await newGrume.save();
    res.status(201).json(newGrume);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getAllGrumes = async (req, res) => {
  try {
    const grumes = await Grume.find();
    res.json(grumes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.getGrumeById = async (req, res) => {
    try {
        const grume = await Grume.findOne({ grumeId: req.params.id });
        if (!grume) {
          return res.status(404).json({ error: "Grume not found" });
        }
        res.json(grume);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
};

exports.updateGrume = async (req, res) => {
    try {
        const { volumeRetire } = req.body;
    
        const grume = await Grume.findOneAndUpdate(
          { grumeId: req.params.id },
          { $inc: { volumeRetire } },
          { new: true }
        );
    
        if (!grume) {
          return res.status(404).json({ error: "Grume not found" });
        }
    
        res.json(grume);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
};

exports.deleteGrume = async (req, res) => {
    try {
        const grume = await Grume.findOneAndDelete({ grumeId: req.params.id });
    
        if (!grume) {
          return res.status(404).json({ error: "Grume not found" });
        }
    
        res.json({ message: "Grume deleted successfully" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      }
};
