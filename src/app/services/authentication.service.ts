import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {ACCESS_TOKEN} from '../app.constant';

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  LOGIN_URL = 'http://test-demo.aem-enersol.com/api/account/login';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(username: string, password: string) {
    return this.http.post(this.LOGIN_URL, {username: username, password: password}, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).toPromise()
      .then((token: string) => {
        localStorage.setItem(ACCESS_TOKEN, token);
        this.router.navigate(['/home']);
      })
      .catch(err => {
        return err.status;
      });
  }

  logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.router.navigate(['/login']);
  }
}
