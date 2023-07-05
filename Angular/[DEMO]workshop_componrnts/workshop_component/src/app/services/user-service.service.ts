import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  summingTwoNumbers(x:HTMLInputElement,y:HTMLInputElement){
    return (Number(x.value) + Number(y.value))
  }
  constructor() { }
}
