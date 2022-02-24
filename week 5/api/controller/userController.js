const User = require('../model/user');
const bycrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

//Signup Controller
async function signup(req,res,next) {

  const userExist = await User.findOne({name: req.body.name})
  if(userExist){
     res.status(400).json({"error":'User name already Exist'}) 
  }
  const emailExist = await User.findOne({email: req.body.email})
  if(emailExist){
     res.status(400).json({"error":'Email already Exist'}) 
  }
  const phoneExist = await User.findOne({phone: req.body.phone})
  if(phoneExist){
     res.status(400).json({"error":'Phone number already Exist'}) 
  }
  var newPassword = req.body.password
  var confirmPassword = req.body.confirmPassword
  if(newPassword == confirmPassword){
    const salt = await bycrypt.genSalt(10);
    hashpassword = await bycrypt.hash(req.body.password, salt)
    const user =  new User({
        name: req.body.name,
        email: req.body.email,
        phone : req.body.phone,
        password: hashpassword
    })
    try{
      const userSignup = await user.save()
     res.send({'message' : 'succesfully registered'})
    }catch(err){
      res.sendStatus(400).send(err) 
    }
    }
else{
  res.status(400).json({error:"Password mismatch"})
}
}




//Login Controller
async function login(req,res,next){
  const phoneExist = await User.findOne({phone: req.body.phone})
  if(!phoneExist){
    res.status(400).json({error:"Phone Number not Found"})
  }
  const checkpassword = await bycrypt.compare(req.body.password, phoneExist.password)
  if(!checkpassword){
    res.status(400).json({error:"Password mismatch"})
  }
  const token = jwt.sign({_id: phoneExist.id},'anystring')
  res.header('token',token).json({'Token' : token, 'name' : phoneExist.name, 'id': phoneExist.id})
}


//Get User details for Profile Page
async function getprofile(req,res){
  const user = await User.findById(req.params.id)
  if(!user){
    res.status(400).json({error:"User not Found"})
  }
  else{
    res.send(user)
  }
}


//Update User datails
const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id,{
    name : req.body.name, 
    phone : req.body.phone, 
    email : req.body.email,
    dob : req.body.dob,
    gender : req.body.gender
  })
  .then(data => {
    res.send({message : "Updated Successfully!",name : data.name})
  })
  .catch(err => {
    res.status(500).send({
        message: err.message || "Some error occurred while creating the Bag."
    });
  });

}

module.exports = {
  signup,
  login,
  getprofile,
  updateUser
}


