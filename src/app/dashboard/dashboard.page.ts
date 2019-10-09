import {Component, OnInit} from '@angular/core';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'aem-dashboard',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage implements OnInit {

  isDashboard;
  tableUsers: any[];

  constructor(private dashboardService: DashboardService) {
  }

  ngOnInit() {
    this.isDashboard = true;
    this.dashboardService.getData()
      .then(data => {
        this.tableUsers = data.tableUsers;
      })
      .catch(err => {
      });
  }
}
