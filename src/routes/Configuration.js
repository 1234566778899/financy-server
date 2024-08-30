const express = require('express');
const { register } = require('../controllers/Configuration');
const router = express.Router();

router.post('/register', register);

module.exports = router;