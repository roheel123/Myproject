const express = require("express");
const router = express.Router();
const passport= require('passport');
const jwt = require('jsonwebtoken');

const User=require('../models/user');
const config=require('../config/database');

router.post('/register',(req,res,next)=>{
 let newUser= new User({
     name:req.body.name,
     email:req.body.email,
     username:req.body.username,
     password:req.body.password,
     age:req.body.age,
     phone:req.body.phone,
     address:req.body.address,
     gender:req.body.gender
     });

     User.addUser(newUser,(err,user)=>{
         if(err){
             res.json({success:false , msg:'Failed to register'});
         }
         else {
            res.json({success:true , msg:'Successfully register'});

         }
     });


});


router.post('/authenticate',(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;

    User.getUserByUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false, msg:'user not found'});
        }
    User.comparePassword(password,user.password,(err,isMatch)=>{
        if(err) throw err;
        if(isMatch){
            const token=jwt.sign(user.toJSON(),config.secret,{
                expiresIn:604800

            });
            res.json({
               success:true,
               token:'JWT '+token,
               user:{
                   id:user._id,
                   name:user.name,
                   username:user.username,
                   email:user.email,
                   phone:user.phone,
                   gender:user.gender,
                   address:user.address,
                   age:user.age
                   

               } 

            });

  }

  else {
      return res.json({success:false,msg:'Wrong password'});
  }



    });

    });
    


});


router.get('/makeappointment',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
res.json({user:req.user});
});


router.get('/validate',(req,res,next)=>{
res.send("Validate");
});

router.put('/register/:id',(req, res,next)=> {

    User.getUserById(req.params.id, (err, user) =>{
        if(err) throw err;
            
        user.name = req.body.name;
        user.email = req.body.email;
        user.username = req.body.username;
        user.password = req.body.password;
        user.gender=req.body.gender;
        user.age=req.body.age;
        user.phone=req.body.phone;
        user.address=req.body.address;
        user.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Product updated!' });
        });

    });
});
            
module.exports=router;

