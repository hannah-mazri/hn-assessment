import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ACCESS_TOKEN} from '../app.constant';

@Injectable({providedIn: 'root'})
export class JwtInterceptor implements HttpInterceptor {

  constructor() {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem(ACCESS_TOKEN);

    const authReq = req.clone({
        headers:
          new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          })
      });
    return next.handle(authReq);
  }
}
