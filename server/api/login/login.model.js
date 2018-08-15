var mongoose = require('mongoose');

mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var loginSchema = new Schema({
    emailid: String,
    password: String
})


module.exports = mongoose.model('login', loginSchema);