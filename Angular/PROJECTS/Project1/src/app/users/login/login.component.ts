import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { GlobalService } from 'src/app/core/global-loader/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData:{
    email:string,
    password:string
  } = {
    email:'',
    password:''
  }
  constructor(private globalService:GlobalService,private router:Router){}
  onSubmit(){
    if(this.isEmailValid() || this.isPasswordValid()) return
      this.formData.email = ''
      this.formData.password = ''

  }
  isEmailValid(){
    return this.formData.email !== '' && !this.emailPattern.test(this.formData.email);
  }
  isPasswordValid(){
    return this.formData.password !== '' && this.formData.password.length < 6;
  }
  emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/


}
