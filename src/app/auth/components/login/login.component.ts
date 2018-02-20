import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: User = new User();
  constructor(private router: Router, private auth: AuthService) { }

  onLogin(): void {
    this.auth.login(this.user)
      .then((user) => {
        localStorage.setItem('token', user.json().token);
        localStorage.setItem('status', user.json().status);
        this.router.navigateByUrl('/home');
      })
      .catch((err) => {
        console.log(err);
      });

  }

}
