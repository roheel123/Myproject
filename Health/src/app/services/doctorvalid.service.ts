import { Injectable } from '@angular/core';

@Injectable()
export class DoctorValidService {

  constructor() { }

  validateRegister(duser) {
    if(duser.name == undefined || duser.email == undefined || duser.username == undefined || duser.password == undefined) {
        return false;
    } else {
      return true;
    }
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
