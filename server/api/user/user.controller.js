var usermodel = require("./user.model");

exports.getUsers = function (req, res, next) {
    usermodel.find({ Is_deleted: false }, function (err, data) {
        if (err) return next(new Error(err))
        return res.send(data);
    })
}


exports.getUser = function (req, res, next) {
    usermodel.findOne({ Is_deleted: false,_id:req.query.id }, function (err, data) {
        if (err) return next(new Error(err))
        return res.send(data);
    })
}
