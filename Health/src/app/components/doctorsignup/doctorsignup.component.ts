
import { Component, OnInit } from '@angular/core';
import {DoctorValidService} from '../../services/doctorvalid.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import {DoctorAuthService} from '../../services/doctorauth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './doctorsignup.component.html',
  styleUrls: ['./doctorsignup.component.css']
})
export class DoctorsignupComponent implements OnInit {
  imageUrl : string = "/assets/img/download.png";
fileToUpload : File = null;
  image:String;
  name:String;
  email:String;
  username:String;
  password:String;
  phone:String;
  speclization:String;
  date:String;
  time:String;
  


  constructor(
    private validateService:DoctorValidService , 
    private authService:DoctorAuthService,
    private flashMessage:FlashMessagesService,
    private router:Router) { }

  ngOnInit() {
  }
  handleFileInput(file : FileList){
    this.fileToUpload = file.item(0);
    var reader = new FileReader();
    reader.onload = (event:any) => {
    this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(this.fileToUpload);
    }

onRegisterSubmit(){

 const duser={
   image:this.image,
   name:this.name,
   email:this.email,
   username:this.username,
   password:this.password,
   phone:this.phone,
   speclization:this.speclization,
   time:this.time,
  
 }

 //fields required

 if(!this.validateService.validateRegister(duser))
 {
  this.flashMessage.show("please fill all fields", {cssClass: 'alert-danger',timeout:3000  });
 // console.log("please fill all fields");
   return false;

 }

 //validate email

 if(!this.validateService.validateEmail(duser.email))
 {
  this.flashMessage.show("please enter valid mail", {cssClass: 'alert-danger',timeout:3000  });
 // console.log("please enter valid email");
   return false;

 }

 this.authService.registerUser(duser).subscribe(data=>{
   if(data.success)
   {
   
    //console.log("Successfull registered");
    this.flashMessage.show("Successfully Registered", {cssClass: 'alert-success',timeout:3000  });
    this.router.navigate(['Doctorlogin']);
    

   }
   else {
     console.log(data);
     this.flashMessage.show("Registeration Failed", {cssClass: 'alert-danger',timeout:3000  });
    // this.router.navigate(['Login']);
   }

 });



}
}



