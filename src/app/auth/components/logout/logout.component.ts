import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/user';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  user: User = new User();
  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
    this.auth.logout(this.user,  localStorage.getItem('token'))
      .then((user) => {
        localStorage.clear();
        this.router.navigateByUrl('/login');
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
