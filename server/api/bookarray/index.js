'use strict';
var express = require('express'),
    router = express.Router(),
    controller = require('./bookarray.controller');
router.get("/", controller.getFeedback)
router.post("/", controller.createFeedback)

module.exports = router;