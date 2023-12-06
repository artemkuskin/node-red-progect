const express = require('express');
const controllers = require('../controllers');

const router = express.Router();

router.use(express.json());

router.post('/temp', controllers.saveTemperatureData);

module.exports = router;