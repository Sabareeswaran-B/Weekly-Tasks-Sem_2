const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    max: 200,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 5
  },
  dob : {
    type : String
  },
  gender : {
    type : String
  }
},{timestamps: true}
)
module.exports = mongoose.model('User',userSchema)