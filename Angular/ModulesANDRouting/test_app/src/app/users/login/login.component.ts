import { Component } from '@angular/core';

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

  onSubmit(){
    
    console.log(this.formData.email)
  }
}
