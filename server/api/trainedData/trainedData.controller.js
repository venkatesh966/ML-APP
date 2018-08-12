var trainedDatamodel = require("./trainedData.model");

exports.postTraineddata = function(req, res, next) {
    var array = req.body;
    console.log(JSON.stringify(array.trainedData))
    var value = JSON.stringify(array.trainedData)
    var value1 = value.split(" ");
    console.log(value1.length);
    console.log(JSON.parse(value1))
    trainedDatamodel.create(array, function(err, data) {
        if (err) return next(new Error(err))
        return res.send(data);
    })
}

exports.getTraineddata = function(req, res, next) {
    trainedDatamodel.find(function(err, data) {
        if (err) return next(new Error(err))
        return res.send(data);
    })
}

exports.updateTraineddata = function(req, res, next) {
    console.log("In Update ")
    var body = {
        trainedData:req.body.trainedData
    }
    console.log(body)
    console.log(req.params.id)
    trainedDatamodel.findByIdAndUpdate({_id:req.params.id }, body, function(err, data) {
        if(err) console.log("err")
        console.log(data)
        return res.send(data);
    });
}
