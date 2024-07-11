const crypto = require('crypto');
const nodemailer = require('nodemailer');
const bcrypt = require('bcryptjs');
const user = require('../models/User');

exports.signup = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword, image } =req.body;
  console.log(firstName, lastName, email, password, confirmPassword, image)
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const hashedConPassword = await bcrypt.hash(confirmPassword, 10);
   
    const existingData = await user.findOne({ email });
    if (existingData) {
      return res.status(400).json({ error: "Cet e-mail est déjà utilisé" });
    }
    const newUser = new user({
      firstName,
      lastName,
      email,
      password:hashedPassword,
      confirmPassword:hashedConPassword,
      image,
    });
   
    await newUser.save();
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

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const User = await user.findOne({ email });

    if (!User) {
      return res.status(400).json({ error: 'Email incorrect, veuillez vous inscrire' });
    }

    const passwordMatch = await bcrypt.compare(password, User.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: 'Mot de passe incorrect' });
    }
    res.status(200).json({ message: 'Connexion réussie', user });
  } catch (error) {
    res.status(500).json({ error: 'Erreur de connexion' });
  }
};

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const User = await user.findOne({ email });
    
    if (!User) {
      return res.status(400).json({ error: "User with this email does not exist" });
    }

    const token = crypto.randomBytes(20).toString('hex');
    User.resetPasswordToken = token;
    User.resetPasswordExpires = Date.now() + 3600000; // 1 hour
    await User.save();

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      to: User.email,
      from: process.env.EMAIL,
      subject: 'Password Reset',
      text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
             Please click on the following link, or paste this into your browser to complete the process:\n\n
             http://${req.headers.host}/reset-password/${token}\n\n
             If you did not request this, please ignore this email and your password will remain unchanged.\n`,
    };

    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        console.error('There was an error: ', err);
        return res.status(500).json({ error: "Error sending the email" });
      }
      res.status(200).json({ message: 'Recovery email sent' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

exports.resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const User = await user.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!User) {
      return res.status(400).json({ error: "Password reset token is invalid or has expired" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    User.password = hashedPassword;
    User.confirmPassword = hashedPassword;
    User.resetPasswordToken = undefined;
    User.resetPasswordExpires = undefined;

    await user.save();
    res.status(200).json({ message: "Password has been reset" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
