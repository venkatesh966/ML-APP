const express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbconnectionurl = "mongodb://localhost:27017/mlapptest";
var path = require('path');
mongoose.connect(dbconnectionurl, {}, function(err) {
    if (err) console.log("Error in db connection", new Error(err));
    console.log("connected to local DB")
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    require("./routes.js")(app);
})
app.listen(3000, function(err) {
    if (err) console.log("Error in server connection");
    console.log("Listening at port 3000");
});
