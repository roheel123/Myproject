

import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map'; 
import { tokenNotExpired } from 'angular2-jwt';
import { HttpClient } from '@angular/common/http';


 


@Injectable()
export class DoctorAuthService {

  authToken:any;
  duser:any;

  constructor(private http:Http) { }

  registerUser(duser){
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/dusers/register',duser,{headers:headers})
    .map(res=>res.json());

  }
  addContact(contact){
    
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/contacts/addContact',contact,{headers:headers})
    .map(res=>res.json());

  }
  
  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  getmakeappointment(spec) {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/dusers/show-all/?spec='+spec, {headers: headers})
      .map(res => res.json());
  }
  makeappointment() {
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/dusers/showall')
    .map(res=>res.json());
  }
  authenticateContact(user)
  {
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/contacts/authenticate',user,{headers:headers})
    .map(res=>res.json());


  }

  authenticateUser(duser)
  {
    let headers=new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/dusers/authenticate',duser,{headers:headers})
    .map(res=>res.json());


  }
  storeContactData(token,user)
  {

    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.duser=user; 

  }

  storeUserData(token,duser)
  {

    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(duser));
    this.authToken=token;
    this.duser=duser; 

  }
  loggedIn() {
    return tokenNotExpired('id_token');
  }

  logout(){
    this.authToken=null;
    this.duser=null;
    localStorage.clear();

  }
  










}