import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  isLoggedIn: Boolean = false;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const status = localStorage.getItem('status');
    if (token) {
      this.auth.authenticated(token)
        .then((user) => {
          if (status === 'true') {
            this.isLoggedIn = true;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }


}
