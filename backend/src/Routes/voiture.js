const express = require('express');
const {
    createVoiture,
    getVoitureById,
    updateVoiture,
    deleteVoiture,
    getAllVoitures
} = require('../Controllers/voitureController');

const router = express.Router();

router.post('/', createVoiture);
router.get('/', getAllVoitures);
router.get('/:id', getVoitureById);
router.patch('/:id', updateVoiture);
router.delete('/:id', deleteVoiture);

module.exports = router;
