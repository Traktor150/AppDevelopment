'use strict';

const express = require('express');
const router = express.Router();

const controlerDefault = require('../controler/control');

router.get('/', controlerDefault.app);

module.exports = router;