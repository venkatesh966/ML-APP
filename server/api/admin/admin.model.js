'use strict';
var crypto = require('crypto'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var adminSchema = new Schema({
    
    bookdata: { type: String },
    Rating: { type: Number },
})


module.exports = mongoose.model('admin', adminSchema);