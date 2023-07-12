import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {

  constructor() { }

  isLoading = false;

  hideLoader () {
    this.isLoading = false
  }
  showLoader(){
    this.isLoading = true
  }
}
