import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  private apiUrl = 'http://localhost:8000/api/users';
  private token = localStorage.getItem('token');
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });
  constructor(private http: Http) {}
  getUsers() {
    return this.http.get(this.apiUrl, { headers: this.headers })
      .map(res => res.json());
  }

}
