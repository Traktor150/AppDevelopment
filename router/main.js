'use strict';

const express = require('express');
const router = express.Router();

const controlerDefault = require('../controler/control');
const dataControler = require('../controler/dataControl');

router.get('/data', dataControler.sendData);
router.post('/login', dataControler.showData);
router.get('/', controlerDefault.app);

module.exports = router;