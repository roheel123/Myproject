const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');
const config=require('../config/database');

const AppointmentSchema= mongoose.Schema({
	
    date: {
		type: Date,
		required: [true, "Date is required."],
		min: new Date(+Date.now() - 7*24*60*60*1000),
	},
	time: {
		type: Number,
		required: [true, "Time is required."],
		min: [480, "Too early"],
		max: [1020, "Too late"],
	},
	complain: {
		type: String,
		required: [true, "Complain is required."],
		minlength: 10,
	}

}, { timestamps: true });


const appointment=module.exports=mongoose.model('appointment',AppointmentSchema);
module.exports.addAppointment=function(newUser,callback){
    newUser.save(callback);
}
module.exports.getAppointment=function(allAppointment,callback){
	appointment.find(appointment,callback);
}
module.exports.deleteAppointment=function(delAppointment,callback){
	appointment.deleteOne(appointment,callback);

}