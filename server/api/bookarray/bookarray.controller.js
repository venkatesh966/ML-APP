var feedbackmodel = require("./bookarray.model");

exports.getFeedback = function(req, res, next) {
    feedbackmodel.find({ Is_deleted: true }, function(err, data) {
        if (err) return next(new Error(err))
        return res.send(data);
    })
}

exports.createFeedback = function(req, res, next) {
    feedbackmodel.create(req.body, function(err, data) {
        if (err) return next(new Error(err))
        return res.send({
            "Status": 200,
            "message": "Successfully Added Feedback"
        });
    })
}
exports.updateFeedback = function(req, res, next) {
    var options = {};
    feedbackmodel.update({ "_id": req.body._id }, req.body, options, function(err, data) {
        return res.send({
            "Status": 200,
            "message": "Successfully Updated Feedback"
        });
    });
}
exports.deleteFeedback = function(req, res, next) {
    var options = { Is_deleted: false };
    feedbackmodel.update({ "_id": req.body._id }, options, function(err, data) {
        return res.send({
            "Status": 200,
            "message": "Feedback Deleted Successfully"
        });
    });
}