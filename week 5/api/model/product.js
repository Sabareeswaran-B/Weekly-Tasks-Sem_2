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
    type : Object,
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
  }

},{timestamps: true}
)
module.exports = mongoose.model('Product',productSchema)