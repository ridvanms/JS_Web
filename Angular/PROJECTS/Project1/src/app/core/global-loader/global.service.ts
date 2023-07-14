import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  isHidden = true
  constructor() { }

  hideLoader(){
    this.isHidden = true
  }
  showLoader(){
    this.isHidden = false
  }
}
