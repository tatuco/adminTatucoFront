import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import { Http, Headers } from '@angular/http';

@Injectable()
export class AuthService {

  private BASE_URL = 'http://localhost:8000/api';
  private headers: Headers = new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'});

  constructor(private http: Http) { }
  login(user: User): Promise<any> {
    const url: string = this.BASE_URL + '/login';


    return this.http.post(url, user,  { headers: this.headers }).toPromise();
  }
  authenticated(token): Promise<any> {
    const url: string = this.BASE_URL + '/home';
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get(url, {headers: headers}).toPromise();
  }
  logout(user: User, token): Promise<any> {
    const url: string = this.BASE_URL + '/logout';
    const headers: Headers = new Headers({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post(url, user, {headers: headers}).toPromise();
  }

}
