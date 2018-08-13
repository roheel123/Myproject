import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppointmentService } from '../../services/appointment.service';
import { AuthService } from '../../services/auth.service';
import {FlashMessagesService} from 'angular2-flash-messages';


import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  doctorname:String;
  date: any;
  time: String;
  complain: String ;
  
    constructor(private _as: AppointmentService, private _router: Router, private _us: AuthService,private flashMessage:FlashMessagesService) { }

  ngOnInit() {
      
      
    
  }
  
  onSubmit() {
    const user={
     
      date:this.date,
      time:this.time,
      complain:this.complain,
      
    }
   // console.log(user);
    this._as.addAppointment(user).subscribe(data=>{
      if(data.success){
        this.flashMessage.show("Appointement done", {cssClass: 'alert-success',timeout:3000  });
          this._router.navigate(['']);
      }
      else{
        console.log(data);
        this.flashMessage.show("Failed ", {cssClass: 'alert-danger',timeout:3000  });
      }
    })

  }
}