const express = require('express');
const { register, list } = require('../controllers/Letter');
const router = express.Router();

router.post('/', register);
router.get('/', list);

module.exports = router;