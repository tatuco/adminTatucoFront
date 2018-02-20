import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { StatusComponent } from './auth/components/status/status.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableUsersComponent } from './components/user/table-users/table-users.component';
import {routes} from './app.routes';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AuthService} from './auth/services/auth.service';
import {UserService} from './services/user.service';
import {AuthenticatedService} from './auth/services/authenticated.service';
import {GuardService} from './auth/services/guard.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StatusComponent,
    NavbarComponent,
    TableUsersComponent
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    AuthService,
    AuthenticatedService,
    GuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
