const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');

const UserSchema= mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true

    },
    username:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true

    },
    phone:{
        type:String,
        required:true
    },
    speclization:{
        type:String,
        required:true
    },
    
    time:{
        type:String,
        required:true

    }
    
    
    
});

const dUser=module.exports=mongoose.model('dUser',UserSchema);

module.exports.getUserById=function(id,callback){
    dUser.findById(id,callback);
}

module.exports.getUserByUsername=function(username,callback){
    const query={username:username}
    dUser.findOne(query,callback);
}

module.exports.addUser=function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err)throw err;
            newUser.password=hash;
            newUser.save(callback);
        });
    }); 
    

}
module.exports.getspecialdoctor=function(spec,callback){
    const query={speclization:spec}
    dUser.find(query,callback);
}
module.exports.getUserBySpeclization=function(speclization,callback){
    const query={speclization:speclization}
    dUser.find(query,callback);
}
module.exports.getUser=function(allUser,callback){
    dUser.find(dUser,callback);
}

module.exports.comparePassword=function (candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);

    });

}
