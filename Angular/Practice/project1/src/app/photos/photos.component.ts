import { Component,OnInit } from '@angular/core';
import { Photo } from '../types/Photo';
import { PhotosService } from './photos.service';
@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit  {
  
  photos:Photo[] = [];

  constructor(private photoService:PhotosService){}
  
  ngOnInit(): void {
    this.photoService.fetchPhotos().subscribe((response) => {
      this.photos = response
    })
  }
}
