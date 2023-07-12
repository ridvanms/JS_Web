import { Component, OnInit } from '@angular/core';
import { GlobalLoaderService } from './core/global-loader/global-loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'project1';
  isLoading:boolean = false
  constructor(private loaderService:GlobalLoaderService,private router:Router){}
  
  ngOnInit(): void {
    this.isLoading = this.loaderService.isLoading
  }
  
  
}
