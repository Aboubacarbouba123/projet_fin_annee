const express = require('express');
const router = express.Router();
const transformationUsinageController = require('../Controllers/transformationUsinageController');

// Route pour créer une entrée dans Transformation/Usinage
router.post('/', transformationUsinageController.createTransformationUsinage);

module.exports = router;
