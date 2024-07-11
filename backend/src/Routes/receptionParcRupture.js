const express = require('express');
const router = express.Router();
const receptionParcRuptureController = require('../Controllers/receptionParcRuptureController');

router.post('/', receptionParcRuptureController.createReceptionParcRupture);
router.get('/:id', receptionParcRuptureController.getReceptionParcRuptureById);
router.put('/:id', receptionParcRuptureController.updateReceptionParcRupture);
router.delete('/:id', receptionParcRuptureController.deleteReceptionParcRupture);
router.get('/', receptionParcRuptureController.getAllReceptionParcRupture);

module.exports = router;
