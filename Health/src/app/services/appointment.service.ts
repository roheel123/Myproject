import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AppointmentService {

  constructor(private http:Http) { }
  addAppointment(appointment) {
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/appointments/addAppointment',appointment,{headers:headers})
    .map(res=>res.json());
}
getAppointments() {
  let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/appointments/getAppointment',{headers:headers})
    .map(res=>res.json());
  
}
delete(appointmentID) {
  let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/appointments/deleteAppointment',appointmentID,{headers:headers})
    .map(res=>res.json());
}
}
