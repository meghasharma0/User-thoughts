const express = require('express');
const { settingData, gettingData } = require('../Controller/userController');
const router = express.Router();

router.post('/user-data', settingData);
router.get('/test', gettingData);

module.exports = router;