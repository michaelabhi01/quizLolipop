const express = require('express');
const router = express.Router();

const editprofileController = require('../controllers/editprofile');
router.post('/', editprofileController.edit_profile);

module.exports = router;