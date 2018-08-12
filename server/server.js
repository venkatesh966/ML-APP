const express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var dbconectionurl = "mongodb://localhost:27017/mlapp1";
var path = require('path');
mongoose.connect(dbconectionurl, {}, function(err) {
    if (err) console.log("Error in db connection", new Error(err));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    require("./routes.js")(app);
})
app.listen(3000, function(err) {
    if (err) console.log("Error in server connection");
    console.log("Listening at port 3000");
});
