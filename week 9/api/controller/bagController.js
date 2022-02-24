const bag = require("../model/bag");
const Bag = require("../model/bag");

exports.create = (req,res) => {
    if(!req.body.userID||!req.body.productID) {
        res.status(400).send({
            message: "user ID & product ID required"
        });
    }
    Bag.create({
        userID : req.body.userID,
        productID : req.body.productID,
        qty : req.body.qty,
        size : req.body.size
    })
    .then(data => {
        res.send({message: "Added to the cart!"});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Bag."
        });
    });
}

exports.getBag = (req, res) => {
    Bag.find({userID : req.params.userID})
    .populate('productID').exec((err, products) => {
        res.send(products);
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Bag."
            });
        }
      })
}

exports.remove = (req,res) => {
    Bag.findByIdAndDelete(req.params.id)
    .then(data => {
        res.send({message : "Item Removed!"})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Bag."
        });
    });
}

exports.update = (req, res) => {
    bag.findByIdAndUpdate(req.params.id,{size : req.body.size, qty : req.body.qty, totalPrice : req.body.totalPrice})
    .then(data => {
        res.send({message : "Size & qty updated!"})
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while updating the Bag."
        });
    });
}