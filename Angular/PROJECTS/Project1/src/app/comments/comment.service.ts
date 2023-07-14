import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Comment} from "../Types/Comment"
import { environment } from 'src/environment.prod';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  
  apiUrl = environment.apiUrl
  constructor(private http:HttpClient) {}

  getComments(){
     return  this.http.get<Comment[]>(`${this.apiUrl}/comments`).pipe(map(comments => comments.slice(0,5)))
  }
}
