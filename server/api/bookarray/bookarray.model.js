'use strict';
var crypto = require('crypto'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var bookSchema = new Schema({
    booksummaryId : {type: ObjectId},
    booksummary1: { type: String },
    booksummary2: { type: String },
    booksummary3: { type: String },
    booksummary4: { type: String },
    booksummary5: { type: String },
    Rating: { type: Number },
}, { versionKey: false,strict:false });


module.exports = mongoose.model('bookdata', bookSchema);