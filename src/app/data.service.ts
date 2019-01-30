import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {PostUserAccount, UserModel} from './generated/userservice';
import {UserService} from './generated/userservice';
// @ts-ignore
import {Observable} from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  postUser(postUserAccount: PostUserAccount): Observable<UserModel> {
    return this.userService.postUser(postUserAccount);
  }
}
