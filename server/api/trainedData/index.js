'use strict';
var express = require('express'),
    router = express.Router(),
    controller = require('./trainedData.controller');

router.post("/", controller.postTraineddata)
router.get("/", controller.getTraineddata)
router.put("/:id", controller.updateTraineddata)
// router.delete("/", controller.deleteBookdata)
module.exports = router;