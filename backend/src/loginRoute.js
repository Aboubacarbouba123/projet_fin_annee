// loginRoutes.js
const express = require("express");
const bcrypt = require('bcryptjs');
const user = require("./models/User");

const router = express.Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = await user.findOne({ email });

    if (!User) {
      return res.status(400).json({ error: 'Email incorrect , veuillez vous inscrire' });
    }

    const passwordMatch = await bcrypt.compare(password, User.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }
    const dataSend = {
      _id: User._id,
      firstName: User.firstName,
      lastName: User.lastName,
      password: User.password,
      email: User.email,
      image: User.image
    }
    console.log(dataSend)
    res.status(200).json({ message: 'Connexion réussie', User: User });


  } catch (error) {
    res.status(500).json({ error: 'Erreur de connexion, ' });
  }
});

module.exports = router;
