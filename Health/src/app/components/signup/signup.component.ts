import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name:String;
  username:String;
  email:String;
  password:String;
  gender:String;
  address:String;
  age:String;
  phone:Number;

  constructor(
    private validateService:ValidateService , 
    private authService:AuthService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
  }

onRegisterSubmit(){

 const user={
   name:this.name,
   email:this.email,
   username:this.username,
   password:this.password,
   gender:this.gender,
   age:this.age,
   address:this.address,
   phone:this.phone


   
 }

 //fields required

 if(!this.validateService.validateRegister(user))
 {
  this.flashMessage.show("please fill all fields", {cssClass: 'alert-danger',timeout:3000  });
 // console.log("please fill all fields");
   return false;

 }

 //validate email

 if(!this.validateService.validateEmail(user.email))
 {
  this.flashMessage.show("please enter valid mail", {cssClass: 'alert-danger',timeout:3000  });
 // console.log("please enter valid email");
   return false;

 }

 this.authService.registerUser(user).subscribe(data=>{
   if(data.success)
   {
   
    //console.log("Successfull registered");
    this.flashMessage.show("Successfully Registered", {cssClass: 'alert-success',timeout:3000  });
    this.router.navigate(['Login']);
    

   }
   else {
     console.log(data);
     this.flashMessage.show("Registeration Failed", {cssClass: 'alert-danger',timeout:3000  });
    // this.router.navigate(['Login']);
   }

 });



}
}


