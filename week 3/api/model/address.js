const mongoose = require('mongoose')

const addressSchema = new mongoose.Schema({
    userID : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    doorno : {
        type : String,
        required : true
    },
    street : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    state : {
        type : String,
        required : true
    },
    country : {
        type : String,
        required : true
    },
    pincode : {
        type : String,
        required : true,
        max : 6,
        min : 6
    },
    phone  :{
        type : String,
        required : true,
        max : 10,
        min : 10
    }
})

module.exports = mongoose.model('address', addressSchema)
