const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');

const ContactSchema= mongoose.Schema({
	username:{
	  type:String,
	  required:true
	},
    email: {
		type: String,
		required: [true, "Email is required."]
		
	},
	phone: {
		type: Number,
		required: [true, "Phone is required."]
		
	},
	message: {
		type: String,
		required: [true, "Message is required."]
	
	}

});


const contact=module.exports=mongoose.model('contact',ContactSchema);
module.exports.addContact=function(newUser,callback){
    newUser.save(callback);
}