import { Component, OnInit } from '@angular/core';
import { ApiRequestsService } from './services/api-requests.service';
import { Posts } from './types/Posts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'workshop_component';
  result: Posts[] = [];

  constructor(private apiService:ApiRequestsService){}

  concatenation($event:Event){
    console.log($event)

  }
  
  getData(){
    this.apiService.getAllPosts().subscribe((data) => {
      this.result = data
    })
  }
  
}
