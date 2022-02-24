const mongoose = require('mongoose')
const product = require('./product')


const bagSchema = new mongoose.Schema({
    userID : {
        type: String,
        required: true
    },
    productID : {
        type : mongoose.Schema.Types.ObjectId,
        ref: product,
        required : true
    },
    size : {
        type : String
    },
    qty : {
        type : Number
    },
    totalPrice : {
        type : Number
    }
})

module.exports = mongoose.model('bag',bagSchema)
