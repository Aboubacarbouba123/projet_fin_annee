const express = require('express');
const {
    createGardien,
    getGardienById,
    updateGardien,
    deleteGardien,
    getAllGardiens
} = require('../Controllers/gardienController');

const router = express.Router();

router.post('/', createGardien);
router.get('/', getAllGardiens);
router.get('/:id', getGardienById);
router.patch('/:id', updateGardien);
router.delete('/:id', deleteGardien);

module.exports = router;
