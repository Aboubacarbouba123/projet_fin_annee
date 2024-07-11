const express = require('express');
const router = express.Router();
const expeditionController = require('../Controllers/expeditionController');

// Route pour créer une entrée dans Expedition
router.post('/', expeditionController.createExpedition);

module.exports = router;
