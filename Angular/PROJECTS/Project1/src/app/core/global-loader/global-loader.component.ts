import { Component } from '@angular/core';
import { GlobalService } from './global.service';

@Component({
  selector: 'app-global-loader',
  templateUrl: './global-loader.component.html',
  styleUrls: ['./global-loader.component.css']
})
export class GlobalLoaderComponent {
  constructor(public globalService:GlobalService){}
}
