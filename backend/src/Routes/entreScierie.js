const express = require('express');
const {
    createEntreScierie,
    getEntreScierieById,
    updateEntreScierie,
    deleteEntreScierie,
    getAllEntreScierie
} = require('../Controllers/entreScierieController');

const router = express.Router();

router.post('/', createEntreScierie);
router.get('/', getAllEntreScierie);
router.get('/:id', getEntreScierieById);
router.patch('/:id', updateEntreScierie);
router.delete('/:id', deleteEntreScierie);

module.exports = router;
