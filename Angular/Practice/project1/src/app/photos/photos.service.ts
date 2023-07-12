import { Injectable } from '@angular/core';
import{HttpClient} from "@angular/common/http"
import { environment } from 'environment/environment';
import { Photo } from '../types/Photo';
import {map} from 'rxjs'
@Injectable({
  providedIn:"root"
})

export class PhotosService {
 
  constructor(private http:HttpClient) { }
  apiUrl = environment.apiUrl

  fetchPhotos(){
    return this.http.get<Photo[]>(`${this.apiUrl}/photos`).pipe(map(photo => photo.slice(0,10)))
  }
  fetchPhoto(id:number){
    return this.http.get<Photo>(`${this.apiUrl}/photos/${id}`)
  }
  
}
