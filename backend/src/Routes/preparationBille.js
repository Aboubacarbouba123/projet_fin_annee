const express = require('express');
const router = express.Router();
const receptionParcRuptureController = require('../Controllers/preparationBilleController');

// Route pour la préparation des billes (billonnage)
router.get('/', receptionParcRuptureController.preparationBilles);

module.exports = router;
