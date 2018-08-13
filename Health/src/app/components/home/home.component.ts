import { Component, OnInit } from '@angular/core';
import {DoctorAuthService} from "../../services/doctorauth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public doctor;
  constructor(private doctorauthservice:DoctorAuthService) { }

  ngOnInit() {
    
  }



}
