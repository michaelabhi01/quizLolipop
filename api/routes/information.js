const express = require('express');
const router = express.Router();

const informationController = require('../controllers/information');
router.get('/', informationController.information);

module.exports = router;