import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';
import {DashboardService} from '../services/dashboard.service';

@Component({
  selector: 'aem-chart-bar',
  templateUrl: './chart-bar.component.html',
})
export class ChartBarComponent implements OnInit {
  chartBars: any[];
  data: any[];

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          // Create scientific notation labels
          callback: function(value, index, values) {
            return value;
          }
        }
      }],
      xAxes: [{
        categoryPercentage: 1.0,
        barPercentage: 0.6
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  public barChartLabels: Label[] = [];
  public barChartData: any[] = [
    {data: [], label: ['Value']}];

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getData()
      .then(data => {
        this.chartBars = data.chartBar;
        this.barChartLabels = this.chartBars.map(item => item.name);
        this.barChartData[0].data = this.chartBars.map(item => item.value);
      })
      .catch(err => {
      });
  }

  public colors = [{backgroundColor: "#D27C7B"}];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    this.barChartData[0].data = data;
  }
}
