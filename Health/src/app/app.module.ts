import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent} from './components/contact/contact.component';
import {DoctorloginComponent} from './components/Doctorlogin/doctorlogin.component';

import { LoginComponent } from './components/login/login.component';
import { SignupComponent} from './components/signup/signup.component';
import { SliderComponent } from './components/slider/slider.component';
import { DoctorlistComponent } from './components/doctorlist/doctorlist.component';
import { LinksComponent } from './components/links/links.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoctorsignupComponent } from './components/doctorsignup/doctorsignup.component';

import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { AdminsignupComponent } from './components/adminsignup/adminsignup.component';
import { DoctordashboardComponent } from './components/doctordashboard/doctordashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';

import { PatientdashboardComponent } from './components/patientdashboard/patientdashboard.component';
import { PatienthistoryComponent } from './components/patienthistory/patienthistory.component';
import { MakeappointmentComponent } from './components/makeappointment/makeappointment.component';
import { CancelappointmentComponent } from './components/cancelappointment/cancelappointment.component';
import { SearchdoctorComponent } from './components/searchdoctor/searchdoctor.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { LogoutComponent } from './components/logout/logout.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { MyappointmentsComponent } from './components/myappointments/myappointments.component';
import { ViewpatientsComponent } from './components/viewpatients/viewpatients.component';
import { AddprescriptionComponent } from './components/addprescription/addprescription.component';
import { DocdetailsComponent } from './components/docdetails/docdetails.component';
import { DlogoutComponent } from './components/dlogout/dlogout.component';
import { DfeedbackComponent } from './components/dfeedback/dfeedback.component';

import { AppointmentService } from './services/appointment.service';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MyprofilepatientComponent } from './components/myprofilepatient/myprofilepatient.component';
import { MedicalhistorypatientComponent } from './components/medicalhistorypatient/medicalhistorypatient.component';
import { DoctorAuthService } from './services/doctorauth.service';
import { DoctorValidService } from './services/doctorvalid.service';
import { AddComponent } from './components/add/add.component';




const appRoutes: Routes =  [
  {
    path:'',
    component:HomeComponent

  },
  {
    path:'Home',
    component:HomeComponent
    
  },
  {
    path:'About',
    component: AboutComponent
  },
  {
    path:'Contact',
    component:ContactComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'newappointment/:id',
    component:AddComponent
  },
  {
    path:'Signup',
    component:SignupComponent
  },
  {
    path:'Doctorlogin',
    component:DoctorloginComponent
  },
  {
    path:'Doctorsignup',
    component:DoctorsignupComponent
  },
  {
    path:'doctordashboard',
    component:DoctordashboardComponent
  },
  {
    path:'Adminlogin',
    component:AdminloginComponent
  },
  {
    path:'AdminSignup',
    component:AdminsignupComponent
  },
  {
    path:'patientdashboard',
    component:PatientdashboardComponent
  },
  {
    path:'patienthistory',
    component:PatienthistoryComponent
  },
  {
    path:'makeappointment',
    component:MakeappointmentComponent
  },
  {
    path:'cancelappointment',
    component:CancelappointmentComponent
  },
  {
    path:'searchdoctor',
    component:SearchdoctorComponent
  },
  {
    path:'feedback',
    component:FeedbackComponent
  },
  {
    path:'myprofile',
    component:MyprofileComponent
  },
  {
    path:'logout',
    component:LogoutComponent
  },
  {
    path:'myappointments',
    component:MyappointmentsComponent
  },
  {
    path:'viewpatients',
    component:ViewpatientsComponent
  },
  {
    path:'addprescription',
    component:AddprescriptionComponent
  },
  {
    path:'docdetails',
    component:DocdetailsComponent
  },
  {
    path:'dlogout',
    component:DlogoutComponent
  },
  {
    path:'dfeedback',
    component:DfeedbackComponent
  },
  {
    path:'myprofilepatient',
    component:MyprofilepatientComponent
  },
  {
    path:'medicalhistorypatient',
    component:MedicalhistorypatientComponent
  }
  

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    SliderComponent,
    DoctorlistComponent,
    LinksComponent,
    FooterComponent,
    DoctorloginComponent,
    DoctorsignupComponent,
    AdminloginComponent,
    AdminsignupComponent,
    DoctordashboardComponent,
    PatientdashboardComponent,
    AdmindashboardComponent,
    PatienthistoryComponent,
    MakeappointmentComponent,
    CancelappointmentComponent,
    SearchdoctorComponent,
    FeedbackComponent,
    LogoutComponent,
    MyprofileComponent,
    MyappointmentsComponent,
    ViewpatientsComponent,
    AddprescriptionComponent,
    DocdetailsComponent,
    DlogoutComponent,
    DfeedbackComponent,
    MyprofilepatientComponent,
    MedicalhistorypatientComponent,
    AddComponent
  ],
  

  imports: [
   
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  
  ],
 
  providers: [ValidateService, AuthService, AuthGuard,DoctorAuthService,DoctorValidService,AppointmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
