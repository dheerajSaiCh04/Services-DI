import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/posts.interface';

@Injectable({
  providedIn: 'root'

})
export class MessagesService {
  private apiUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  

  getMessages() {
    return ['message1', 'message2', 'message3'];
  }

  getPosts() : Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
}
