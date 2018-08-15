'use strict';
var express = require('express'),
    router = express.Router(),
    controller = require('./login.controller');
router.get("/", controller.get)
router.post("/", controller.create)

module.exports = router;