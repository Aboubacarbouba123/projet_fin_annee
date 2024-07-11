const express = require("express");
const bcrypt = require('bcryptjs');
const User = require("./models/User"); // Ensure correct model import

const router = express.Router();

// Signup API
router.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword, image } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const hashedConPassword = await bcrypt.hash(confirmPassword, 10);
     
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "Cet e-mail est déjà utilisé" });
      }
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        confirmPassword: hashedConPassword,
        image,
      });
      await newUser.save();
      res.status(201).json({ message: "Données enregistrées avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Une erreur est survenue lors de l'enregistrement des données" });
    }
});

module.exports = router;
