import {RouterModule, Routes} from '@angular/router';
import {TableUsersComponent} from './components/user/table-users/table-users.component';
import {AuthenticatedService} from './auth/services/authenticated.service';
import {LoginComponent} from './auth/components/login/login.component';
import {StatusComponent} from './auth/components/status/status.component';
import {GuardService} from './auth/services/guard.service';
import {ModuleWithProviders} from '@angular/core';

const appRoutes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'users', component: TableUsersComponent, canActivate: [AuthenticatedService]},
  { path: 'login', component: LoginComponent, canActivate: [GuardService] },
  { path: 'home', component: StatusComponent, canActivate: [AuthenticatedService] }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);
