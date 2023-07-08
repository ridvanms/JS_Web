import { Component, OnInit } from '@angular/core';
import { AlbumService } from './album.service';
import { Album } from '../Types/Album';
import { GlobalService } from '../core/global-loader/global.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albumData: Album[] = []

  constructor(private albumService:AlbumService,private globalService:GlobalService){}

  ngOnInit(): void {
    this.loadPhotos();
  }
  loadPhotos():void{
    this.globalService.showLoader();
    
    this.albumService.getPhotos().subscribe({
      next: (photos) => {
        this.albumData = photos;
        this.globalService.hideLoader();
      },
      error: (error) => {
        console.error(`Error: ${error}`);
        this.globalService.hideLoader();
      },
    })
  }
  reloadPhotos(): void {
    this.loadPhotos();
  }
}
