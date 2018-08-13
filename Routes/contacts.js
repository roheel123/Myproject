const express = require("express");
const router = express.Router();
const passport= require('passport');
const jwt = require('jsonwebtoken');

const Contact=require('../models/contact');
const config=require('../config/database');

router.post('/addContact',(req,res,next)=>{
 let newUser= new Contact({
     
     username:req.body.username,
     email:req.body.email,
     phone:req.body.phone,
     message:req.body.message
     });

     Contact.addContact(newUser,(err,contact)=>{
        if(err){
            res.json({success:false , msg:'Failed to register'});
        }
        else {
           res.json({success:true , msg:'Successfully register'});

        }
    });


});

module.exports=router;