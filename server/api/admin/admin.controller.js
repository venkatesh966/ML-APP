var Bookdatamodel = require("./admin.model");

exports.getBookdata = function(req, res, next) {
    Bookdatamodel.find(function(err, data) {
        if (err) return next(new Error(err))
        return res.send(data);
    })
}

exports.createBookdata = function(req, res, next) {
    var array = req.body;
    console.log(array)

    Bookdatamodel.create(req.body, function(err, data) {
        if (err) return next(new Error(err))
        return res.status(200).send(data);
    })
}

// exports.updateBookdata = function(req, res, next) {
//     var options = {};
//     Bookdatamodel.update({ "_id": req.body._id }, req.body, options, function(err, data) {
//         return res.send({
//             "Status": 200,
//             "message": "Successfully Updated Bookdata"
//         });
//     });
// }
// exports.deleteBookdata = function(req, res, next) {
//     var options = { Is_deleted: false };
//     Bookdatamodel.update({ "_id": req.body._id }, options, function(err, data) {
//         return res.send({
//             "Status": 200,
//             "message": "Bookdata Deleted Successfully"
//         });
//     });
//}