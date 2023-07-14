import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

import { environment } from 'src/environment.prod';

import { Album } from '../Types/Album';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient) { }
 
  apiUrl = environment.apiUrl

  getPhotos() {
    return this.http.get<Album[]>(`${this.apiUrl}/photos`).pipe(map(response => response.slice(0,5)))
  }
  getPhoto(id:number){
    return this.http.get<Album>(`${this.apiUrl}/photos/${id}`)
  }

}
