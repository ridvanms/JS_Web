import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Album } from 'src/app/Types/Album';
import { GlobalService } from 'src/app/core/global-loader/global.service';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit {
  id:number = 0
  photo:Album | undefined = undefined

  constructor(private route:ActivatedRoute,private globalService:GlobalService, private albumService:AlbumService){}
  
  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id']
    })
    this.loadPhoto()
  }
  loadPhoto(){
    this.globalService.showLoader();
    
    this.albumService.getPhoto(this.id).subscribe({
      next:
        (photo)=>{
          this.photo = photo;
          this.globalService.hideLoader()
        },
      error:(err)=>{
        console.error(`Error: ${err.message}`);
        this.globalService.hideLoader()}
    })
  }
}
