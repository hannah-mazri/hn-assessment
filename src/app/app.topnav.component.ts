import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {AuthenticationService} from './services/authentication.service';

@Component({
  selector: 'app-topnav',
  template: `

    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" [routerLink]="['/home']">ASSESSMENT</a>
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" [routerLink]="['/home']" [style.display]="isDashboard ? '' : 'none'">Home <span class="sr-only">(current)</span></a>
            </li>
          </ul>
          <button class="btn btn-dark"
                  type="button"
                  [style.display]="isDashboard ? '' : 'none'"
                  (click)="logout()">Logout</button>
    </nav>
  `
})

export class AppTopnavComponent implements OnInit, OnDestroy {

  @Input() isDashboard: boolean;
  destroy$: Subject<any> = new Subject<any>();

  constructor(private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationService.logout();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
