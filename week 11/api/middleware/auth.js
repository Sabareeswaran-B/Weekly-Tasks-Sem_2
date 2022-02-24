// const express = require('express');
// const jwt  = require('jsonwebtoken')
// const User = require('../model/user')

// const app = express();

// const auth = async (req,res,next) => {
//     try {

//         const token = req.header('token')
        
//         const decoded  =  jwt.verify(token, "anystring")
       
//         const user  = await User.findOne({ _id:decoded._id})

//         if(!user){
//             console.log(decoded)
//         }
//         req.token = token
//         req.user = user
//         next()
//     } catch (error) {
//         console.log(error)
//         res.status(401).send({error:'Please authenticate!'})
//     }
// }

// module.exports = auth


//Passport Authorization jwt strategy
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt,
    User = require('../model/user');
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'anystring';
const Strategy = new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
});


module.exports = (passport) => {
    passport.use(Strategy)
}

