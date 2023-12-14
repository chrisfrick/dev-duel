import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import User from './types/User';

const inspectUserUrl = 'http://localhost:3000/api/user/';
const duelUsersUrl = 'http://localhost:3000/api/users?';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  inspectUser(username = 'andrew') {
    let data = this.http.get<User>(inspectUserUrl + username);
    console.log(data);
    return data;
  }

  async duelUsers(user1 = 'fabpot', user2 = 'andrew') {
    let data = await this.http
      .get(duelUsersUrl + `username=${user1}&username=${user2}`)
      .toPromise();
    console.log(data);
    return data;
  }
}
