const express = require('express');
const {createChauffeur,updateChauffeur,getChauffeurById,deleteChauffeur,getAllChauffeur} = require('../Controllers/chauffeurController');

const router = express.Router();

router.post('/', createChauffeur);
router.get('/', getAllChauffeur);
router.get('/:id', getChauffeurById);
router.patch('/:id', updateChauffeur);
router.delete('/:id', deleteChauffeur);

module.exports = router;