const express = require('express');
const router = express.Router();
const colissageController = require('../Controllers/colissageController');

// Route pour créer une entrée dans Colissage
router.post('/', colissageController.createColissage);

module.exports = router;
