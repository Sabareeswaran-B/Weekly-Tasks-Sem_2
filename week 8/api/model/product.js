const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true,
    max: 200,
  },
  productName : {
    type : String,
    required: true,
    max: 200
  },
  brandName : {
    type : String,
    required: true,
    max: 200
  },
  specialPrice : {
    type : Number,
    required: true,
    max: 200
  },
  MRP : {
    type : Number,
    required: true,
    max: 200
  },
  offer : {
    type : String,
    required: true,
    max: 200
  },
  bestPrice : {
    type : Number,
    required: true,
    max: 200
  },
  size : {
    type : Array,
    required: true,
    max: 200
  },
  specs : {
    type : Array,
    required: true,
    max: 200
  },
  images : {
    type : Array,
    required: true,
    max: 500
  },
  productType : {
    type : String,
    required: true,
    max: 200
  },
  gender : {
    type : String,
    required : true,
    max : 100
  },
  soldby : {
    type : String,
    required : true,
  }

},{timestamps: true}
)
module.exports = mongoose.model('Product',productSchema)