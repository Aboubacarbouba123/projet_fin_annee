const express = require('express');
const { createGrume, getAllGrumes, getGrumeById, updateGrume, deleteGrume } = require('../Controllers/grumeController');

const router = express.Router();

router.post('/', createGrume);
router.get('/', getAllGrumes);
router.get('/:id', getGrumeById);
router.patch('/:id', updateGrume);
router.delete('/:id', deleteGrume);

module.exports = router;
