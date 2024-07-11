const express = require('express');
const receptionParcRuptureController = require('../Controllers/checkParcRuptureControlller');
const router = express.Router();
// Route pour le "check parc de rupture"
router.get('/', receptionParcRuptureController.checkParcRupture);

module.exports = router;
