import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {ACCESS_TOKEN} from '../app.constant';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let token = localStorage.getItem(ACCESS_TOKEN);
    if (!token) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
