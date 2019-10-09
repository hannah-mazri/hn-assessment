import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoginPage} from './login/login.page';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';
import {DashboardPage} from './dashboard/dashboard.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {appRoutes} from './app.route';
import {JwtInterceptor} from './interceptors/jwt.interceptor';
import {UserListComponent} from './user-list/user-list.component';
import {ChartDoughnutComponent} from './dashboard/chart-doughnut.component';
import {ChartBarComponent} from './dashboard/chart-bar.component';
import { ChartsModule } from 'ng2-charts'
import {AppTopnavComponent} from './app.topnav.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTopnavComponent,
    LoginPage,
    DashboardPage,
    UserListComponent,
    ChartBarComponent,
    ChartDoughnutComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ChartsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
