import {Component, OnInit} from '@angular/core';
import { ChartType } from 'chart.js';
import {Label, SingleDataSet} from 'ng2-charts';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'aem-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
})

export class ChartDoughnutComponent implements OnInit {
  chartDonuts: any[];

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getData()
      .then(data => {
        this.chartDonuts = data.chartDonut;
        this.doughnutChartLabels = this.chartDonuts.map(item => item.name);
        this.doughnutChartData = this.chartDonuts.map(item => item.value);

      })
      .catch(err => {
      });
  }

  public color = [{backgroundColor: ["#ABD02B", "#30D7BB", "#ED8E0C", "#61B498", "#30D7BB"]}];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }
}
