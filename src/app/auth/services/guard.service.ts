import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import {Router} from '@angular/router';

@Injectable()
export class GuardService {

  constructor(private auth: AuthService, private router: Router) { }
  canActivate(): boolean {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/status');
      return false;
    } else {
      return true;
    }
  }

}
