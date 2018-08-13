import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-patientdashboard',
  templateUrl: './patientdashboard.component.html',
  styleUrls: ['./patientdashboard.component.css']
})
export class PatientdashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    this.router.navigateByUrl('/makeappointment');
  }

}
