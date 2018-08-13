const express = require("express");
const router = express.Router();
const passport= require('passport');
const jwt = require('jsonwebtoken');

const Appointment=require('../models/appointment');
const config=require('../config/database');
console.log("good");

router.post('/addAppointment',(req,res,next)=>{
   

    Appointment.find({'date': req.body.date}, function(err, response) {
        if(err) {
            return res.status(402).json(err)
        }
        else if(response.length > 2){
            return res.status(403).json('Doctor already has three appointments this day. Please select a different day.')
        }
       
                else{
                    Appointment.find({'date': req.body.date, 'time': {$gt: req.body.time-20, $lt: req.body.time+20}}, function(err, response) {
                        if(err) {
                            return res.status(402).json(err)
                        }
                        else if(response.length > 0){
                            return res.status(403).json('This appointment time is unavailable. Appointments must be scheduled at least 20 minutes apart. Please choose a different time.')
                        }
                
   else{
    let newUser= new Appointment({
    
        date:req.body.date,
        time:req.body.time,
        complain:req.body.complain

        
   
        });
   
        Appointment.addAppointment(newUser,(err,appointment)=>{
            if(err){
                res.json({success:false , msg:'Failed to register'});
            }
            else {
               res.json({success:true , msg:'Successfully register'});
   
            }
        });
   
    
                }
            });
        }
    });
});

        router.get('/getAppointment',function(req,res,next){
            Appointment.find().exec(function(err,data){
                res.status(200).send(JSON.stringify(data));
            });

        })  ;

        router.delete('/deleteAppointment',function(req,res,next){
            Appointment.findOneAndRemove({'_id': req.params.id}, function(err, response) {
                if(err) {
                    return res.status(402).json(err)
                }
                else{
                    return res.json(response)
                }
            })
        
    
        })
                        
   module.exports=router;