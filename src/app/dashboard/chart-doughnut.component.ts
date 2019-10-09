import {Component, OnInit} from '@angular/core';
import { ChartType } from 'chart.js';
import {Label, SingleDataSet} from 'ng2-charts';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'aem-chart-doughnut',
  templateUrl: './chart-doughnut.component.html',
})

export class ChartDoughnutComponent implements OnInit {
  // Doughnut

  chartDonuts: any[];

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: SingleDataSet = [];
  // public doughnutChartLabels: Label[] = ['Donut 1', 'Donut 2', 'Donut 3', 'Donut 4', 'Donut 5'];
  // public doughnutChartData: SingleDataSet = [145, 225, 310, 210, 250];
  public doughnutChartType: ChartType = 'doughnut';

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getData()
      .then(data => {
        this.chartDonuts = data.chartDonut;
        console.log('donuts ', this.chartDonuts);

        this.doughnutChartLabels = this.chartDonuts.map(item => item.name);
        this.doughnutChartData = this.chartDonuts.map(item => item.value);

      })
      .catch(err => {
      });
  }

  public color = [{backgroundColor: ["#DFA8E4", "#934379", "#72286F", "#9452A5", "#C89CE4"]}];
  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
