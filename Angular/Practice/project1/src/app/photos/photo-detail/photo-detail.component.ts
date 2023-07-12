import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotosService } from '../photos.service';
import { Photo } from 'src/app/types/Photo';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  
  constructor(private route:ActivatedRoute,private photosService:PhotosService){}
  photo:Photo | undefined;
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.photosService.fetchPhoto(params['id']).subscribe((photo) => {
        this.photo = photo
      })
    })
  }
}
