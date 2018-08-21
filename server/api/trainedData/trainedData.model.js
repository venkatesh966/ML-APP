'use strict';
var crypto = require('crypto'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var dataSchema = new Schema({
    
    trainedData: { type: String },
    trainedArticles: { type: String }
    
});


module.exports = mongoose.model('trainedData', dataSchema);