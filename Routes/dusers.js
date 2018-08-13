const express = require("express");
const router = express.Router();
const passport= require('passport');
const jwt = require('jsonwebtoken');

const User=require('../models/duser');
const config=require('../config/database');
console.log("good");
router.post('/register',(req,res,next)=>{
 let newUser= new User({
     
     name:req.body.name,

     email:req.body.email,
     username:req.body.username,
     password:req.body.password,
     phone:req.body.phone,
     speclization:req.body.speclization,
     time:req.body.time
     

     });

     User.addUser(newUser,(err,duser)=>{
         if(err){
             res.json({success:false , msg:'Failed to register'});
         }
         else {
            res.json({success:true , msg:'Successfully register'});

         }
     });


});
/*router.get('/doctor,',(req,res,next)=>{
    const speclization=req.body.speclization;
    const time=req.body.time;
    User.getUserByUsername(speclization,(err,duser)=>{
        if(err) throw err;
        if (!duser){
            return res.json({success:false, msg:'No doctor'});
        }
        User.compareTime(time,duser.time,(err,isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token=jwt.sign(duser.toJSON(),config.secret,{
                    expiresIn:604800
                });
                res.json({
                    success:true,
                    token:'JWT'+token,
                })
            }
        })
    })
})*/

router.post('/authenticate',(req,res,next)=>{
    const username=req.body.username;
    const password=req.body.password;

    User.getUserByUsername(username,(err,duser)=>{
        if(err) throw err;
        if(!duser){
            return res.json({success:false, msg:'user not found'});
        }
    User.comparePassword(password,duser.password,(err,isMatch)=>{
        if(err) throw err;
        if(isMatch){
            const token=jwt.sign(duser.toJSON(),config.secret,{
                expiresIn:604800

            });
            res.json({
               success:true,
               token:'JWT '+token,
               duser:{
                   id:duser._id,
                   name:duser.name,
                   email:duser.email,
                   username:duser.username,
                   phone:duser.phone,
                   speclization:duser.speclization,
                   time:duser.time
                   
                   
                   

               } 

            });

  }

  else {
      return res.json({success:false,msg:'Wrong password'});
  }



    });

    });
    


});

    

router.get('/about',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
res.json({duser:req.duser});
});

router.get('/validate',(req,res,next)=>{
res.send("Validate");
});

router.get('/showall',function(req,res)
{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    User.find()
   .exec(function(err,data)
   {
             
             res.status(200).send(JSON.stringify(data));
   })
});
var URLI=require("url")
router.post('/show-all',function(req,res)
{
        var query=URLI.parse(req.url,true).query;
        

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    
    User.getspecialdoctor(query.spec,(err,duser)=>{
        if(err){
            res.json({success:false , msg:'Failed to register'});
        }
        else {
            res.status(200).send(JSON.stringify(duser));

        }
    });
//     User.find()
//    .exec(function(err,data)
//    {
             
          
//    })
});

            
module.exports=router;

