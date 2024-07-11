const express = require('express');
const router = express.Router();
const cubageController = require('../Controllers/cubageController');

// Route pour créer une entrée dans Cubage
router.post('/', cubageController.createCubage);

module.exports = router;
