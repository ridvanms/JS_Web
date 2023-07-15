import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,AbstractControl } from '@angular/forms';

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
        password: new FormControl('',[Validators.required,Validators.minLength(3)]),
        confirmPassword: new FormControl('',[Validators.required])
      },{
        validators:this.passwordMatchValidator
      })
    }
    onSubmit(){
      if(this.myForm.valid ){
        console.log(this.myForm.controls.email.value) // returning the value email as added in the form 
      }
    }
    passwordMatchValidator(control:AbstractControl):{[key:string]:boolean} | null{
      const password = control.get('password')?.value;
      const confirmPassword= control.get('confirmPassword')?.value

      if(password !== confirmPassword){
        return {'passwordMismatch':true}
      }
      return null
    }
}