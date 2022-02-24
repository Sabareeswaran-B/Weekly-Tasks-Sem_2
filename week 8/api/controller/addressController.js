const Address = require("../model/address");

exports.create = (req,res) => {
    if(!req.body.userID) {
        res.status(400).send({
            message: "Plese Login !"
        });
    }
    Address.create({
        userID : req.body.userID,
        name : req.body.name,
        doorno : req.body.doorno,
        street : req.body.street,
        city : req.body.city,
        state : req.body.state,
        country : req.body.country,
        pincode : req.body.pincode,
        phone : req.body.phone
    })
    .then(data => {
        res.send({message: "Address Added!"});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating address."
        });
    });
}

exports.find = (req, res) => {

    Address.find({userID : req.params.userID})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating address."
        });
    });
}


exports.remove = (req, res) => {

    Address.findByIdAndUpdate(req.params.id,{userID:''})
    .then(data => {
        res.send({message : "Address Removed!"})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Bag."
        });
    });
}