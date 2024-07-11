const express = require('express');
const {createPack,getAllPack,getPackById,updatePack,deletePack} = require('../Controllers/packController')

const router = express.Router();

router.post('/', createPack);
router.get('/', getAllPack);
router.get('/:id', getPackById);
router.patch('/:id', updatePack);
router.delete('/:id', deletePack); 

module.exports = router;