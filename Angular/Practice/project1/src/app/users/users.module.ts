import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

const routes:Routes = [
  {
    path:" ",
    component :UsersComponent
  },
  {
    path:"profile",
    component:ProfileComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"signup",
    component:SignupComponent
  }
]

@NgModule({
  declarations: [
    UsersComponent,
    ProfileComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    UsersComponent,
    ProfileComponent,
    RouterModule
  ]
})
export class UsersModule { }
