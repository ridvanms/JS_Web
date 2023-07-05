import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { Posts } from '../types/Posts';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(private http:HttpClient) { }

  getAllPosts(): Observable<Posts[]> {
    const url = "http://localhost:3000/api/posts"  
    return this.http.get<Posts[]>(url);
  }
}
