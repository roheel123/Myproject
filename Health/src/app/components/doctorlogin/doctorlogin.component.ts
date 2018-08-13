
import { Component, OnInit } from '@angular/core';
import {DoctorAuthService} from "../../services/doctorauth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-doctorlogin',
  templateUrl: './doctorlogin.component.html',
  styleUrls: ['./doctorlogin.component.css']
})
export class DoctorloginComponent implements OnInit {
  username:String;
  password:String;

  constructor(
    private authService:DoctorAuthService,
    private router:Router,
    private flashMessage:FlashMessagesService
  
  ) { }
 
  onLogin()

{
  const duser={
    username:this.username,
    password:this.password
  }

  this.authService.authenticateUser(duser).subscribe(data=>{
   // console.log(data);

   if(data.success)
   {

    this.authService.storeUserData(data.token,data.user);
    this.flashMessage.show('Logged In',{
      cssClass:'alert-success',
      timeout:5000
    });
    this.router.navigate(['doctordashboard']);

   }
   else 
   {
     this.flashMessage.show(data.msg,{
       cssClass:'alert-danger',
       timeout:5000
     });
     this.router.navigate(['doctorlogin']);

      
   }
   

  });









} 
 ngOnInit() {
  }

onLoginSubmit()
{
  

}




}



