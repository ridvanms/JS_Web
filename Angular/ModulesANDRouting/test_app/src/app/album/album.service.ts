import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { environment } from 'src/environment.prod';

import { Album } from '../Types/Album';

import{ActivatedRoute}  from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient,private activeRoute:ActivatedRoute) { }
 
  apiUrl = environment.apiUrl

  getPhotos() {
    return this.http.get<Album[]>(`${this.apiUrl}/photos`).pipe(map(response => response.slice(0,5)))
  }
  getPhoto(id:number){
    return this.http.get<Album>(`${this.apiUrl}/photos/${id}`)
  }

}
