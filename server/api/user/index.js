'use strict';
var express = require('express'),
    router = express.Router(),
    controller = require('./user.controller');

router.get("/", controller.getInfo)
router.post("/", controller.storeInfo)

module.exports = router;