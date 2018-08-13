import { Component, OnInit } from '@angular/core';
import {DoctorAuthService} from "../../services/doctorauth.service";
import {Router} from "@angular/router";
import {FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  username:String;
  email:String;
  phone:Number;
  message:String;



  constructor(private authService:DoctorAuthService,
    private router:Router,
    private flashMessage:FlashMessagesService) {
    

  }

  ngOnInit() {
  }
  oncontact(){
    const user={
      username:this.username,
      email:this.email,
      phone:this.phone,
      message:this.message

    }
    this.authService.addContact(user).subscribe(data=>{
      if(data.success){
        this.flashMessage.show("okay wait for our response", {cssClass: 'alert-success',timeout:3000  });
          this.router.navigate(['contact']);
      }
      else{
        console.log(data);
        this.flashMessage.show("Failed ", {cssClass: 'alert-danger',timeout:3000  });
      }
    })

  }
}
   
   
   
   
   
   
   
   
   


