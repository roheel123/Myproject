import { Component, OnInit } from '@angular/core';
import {DoctorAuthService} from "../../services/doctorauth.service";
@Component({
  selector: 'app-doctorlist',
  templateUrl: './doctorlist.component.html',
  styleUrls: ['./doctorlist.component.css']
})
export class DoctorlistComponent implements OnInit {
  public doctor;
  errorMessage:string="There is an error";
  speclization:String;

  constructor(private doctorauthservice: DoctorAuthService) { }

  ngOnInit() {
    this.getemp();
  }
  getemp(){
    const user={
      speclization:this.speclization     
    }
    
    this.doctorauthservice.makeappointment().subscribe(
      data=>{this.doctor=data},
      err=>console.error("error aya hai"),
      ()=>console.log(this.doctor+"")
    );
    
  }

}
