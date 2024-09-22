const express = require('express');
const { register, list, deleteLetter } = require('../controllers/Letter');
const router = express.Router();

router.post('/', register);
router.get('/', list);
router.delete('/:id', deleteLetter);

module.exports = router;