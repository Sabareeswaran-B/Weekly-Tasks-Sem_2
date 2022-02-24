const mongoose = require('mongoose')
const address = require('./address')
const product = require('./product')
const user = require('./user')


const orderSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: user,
        required: true
    },
    productID : {
        type : mongoose.Schema.Types.ObjectId,
        ref: product,
        required : true
    },
    addressID : {
        type : mongoose.Schema.Types.ObjectId,
        ref: address,
        required : true
    },
    qty : String,
    size : String,
    totalPrice : Number
},{timestamps: true})

module.exports = mongoose.model('order',orderSchema)
