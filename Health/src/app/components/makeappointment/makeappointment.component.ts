import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DoctorAuthService} from "../../services/doctorauth.service";
import {AuthService} from "../../services/auth.service";
import {FlashMessagesService} from 'angular2-flash-messages';
import { Alert } from 'selenium-webdriver';
@Component({
  selector: 'app-makeappointment',
  templateUrl: './makeappointment.component.html',
  styleUrls: ['./makeappointment.component.css']
})
export class MakeappointmentComponent implements OnInit {
  public doctor;
  public doctors;
  public add="disabled";
  public selectedDoc="";
  public addbutton="disabled";
  errorMessage:string="There is an error";
   speclization:String;
  constructor(private doctorauthservice: DoctorAuthService,private authservice:AuthService, private router:Router,private flashMessage:FlashMessagesService) {

   }
   ngOnInit() {
    

  }
  Click= function () {
  
    
};

  btnClick= function () {
  
    this.router.navigateByUrl('/newappointment/'+this.selectedDoc);
};
  getemp(){
    
    this.doctorauthservice.getmakeappointment(this.speclization).subscribe(
      data=>{this.doctor=data},
      err=>console.error("error aya hai"),
      ()=>console.log(this.doctor+"")
    );
    
  }
  enable(){
    this.add="";
  }
  enableaddbutton(i){
    this.addbutton="";
    this.selectedDoc=i;
  }
  


    }
