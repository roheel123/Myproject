import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DoctorAuthService} from "../../services/doctorauth.service";
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  
  constructor(private doctorauthservice: DoctorAuthService, private router:Router) {

   }

  ngOnInit() {
  }


}
