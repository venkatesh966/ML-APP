'use strict';
var express = require('express'),
    router = express.Router(),
    controller = require('./admin.controller');
    
router.get("/", controller.getBookdata)
router.post("/", controller.createBookdata);
// router.put("/", controller.updateBookdata)
// router.delete("/", controller.deleteBookdata)
module.exports = router;