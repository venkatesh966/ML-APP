'use strict';
var crypto = require('crypto'),
    mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    Name: { type: String },
    Phone_number: { type: Number },
    Designation: { type: String },
    Email: { type: String },
    Password: { type: String, default: 123456 },
    Is_deleted: { type: Boolean, default: false }
}, { versionKey: false,strict:false });


module.exports = mongoose.model('User', UserSchema);