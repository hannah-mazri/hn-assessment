import {Routes} from '@angular/router';
import {LoginPage} from './login/login.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {AuthGuard} from './guards/auth.guard';

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'login'},
  {path: 'login', component: LoginPage},
  {path: 'home', component: DashboardPage, canActivate: [AuthGuard]},
  {path: '**', redirectTo: 'login'}
];
