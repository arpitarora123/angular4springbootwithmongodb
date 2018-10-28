import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  APP_URL = 'http://localhost:8102';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>(this.APP_URL + '/user/');
  }

  addUser(user) {
    console.log('Adding User ' + JSON.stringify(user));
    return this.http.post(this.APP_URL + '/user/create/', user);
  }
}
