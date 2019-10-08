import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../services/dashboard.service';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'aem-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit {

  chartBars: any[];
  chartDonuts: any[];
  tableUsers: any[];

  constructor(private dashboardService: DashboardService,
              private authenticationService: AuthenticationService,) {
  }

  ngOnInit() {
    this.dashboardService.getData()
      .then(data => {
        this.chartBars = data.chartBar;
        this.chartDonuts = data.chartDonut;
        this.tableUsers = data.tableUsers;
      })
      .catch(err => {
      });
  }

  logout() {
    this.authenticationService.logout();
  }
}
