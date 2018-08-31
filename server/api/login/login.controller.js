var model = require("./login.model");

exports.get = function(req, res, next) {
    model.find( function(err, data) {
        if (err) return next(new Error(err))
        return res.send(data);
    })
}

exports.create = function(req, res, next) {
    var newdb={
        emailid:req.body.emailid,
        password:req.body.password
    }
    model.create(newdb,function(err,data){
        if (err) return next(new Error(err))
        return res.send({
            "Status": 200,
            "message": "Successfully Added "
        });
    })
}
// exports.delete = function(req, res, next) {
//     var options = { Is_deleted: false };
//     model.update({ "_id": req.body._id }, options, function(err, data) {
//         return res.send({
//             "Status": 200,
//             "message": " Deleted Successfully"
//         });
//     });
