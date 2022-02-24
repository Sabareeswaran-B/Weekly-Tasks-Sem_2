const Order = require("../model/order");

exports.create = (req,res) => {
    if(!req.body.userID||!req.body.productID) {
        res.status(400).send({
            message: "user ID & product ID required"
        });
    }
    Order.create({
        userID : req.body.userID,
        productID : req.body.productID,
        addressID : req.body.addressID,
        qty : req.body.qty,
        size : req.body.size,
        totalPrice : req.body.totalPrice
    })
    .then(data => {
        res.send({message: "Order Placed Successfully!"});
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Order."
        });
    });
}


exports.getAllOrder = (req, res) => {

    Order.find({userID : req.params.userID})
    .populate('productID')
    .populate('addressID')
    .exec((err, products) => {
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Bag."
            });
        }
        else {
            res.send(products);
        }
         
    })
} 
exports.getOrderById = (req, res) => {

    Order.find({_id : req.params.id,userID : req.params.userID})
    .populate('productID')
    .populate('addressID')
    .exec((err, products) => {
        if(err){
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Bag."
            });
        }
        else {
            res.send(products);
        }
         
    })
}