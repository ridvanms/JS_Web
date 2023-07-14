import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    myForm:FormGroup | any;


    ngOnInit(): void {
      this.myForm = new FormGroup({
        email: new FormControl('',[Validators.email,Validators.required]),
        password: new FormControl('',[Validators.required,Validators.minLength(3)])
      })
    }
    onSubmit(){
      if(this.myForm.valid ){
        console.log(`myForm:  ${this.myForm}`)
      }
    }
}