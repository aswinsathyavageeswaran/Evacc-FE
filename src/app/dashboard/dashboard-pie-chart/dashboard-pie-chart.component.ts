import { Component } from '@angular/core';
import { ChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
    selector: 'app-dashboard-pie-chart',
    templateUrl: './dashboard-pie-chart.component.html',
    styleUrls: ['./dashboard-pie-chart.component.scss']
})
export class DashboardPieChartComponent {

    public pieChartLabels: string[] = ["Due", "Done", "Overdue"];
    public pieChartData: number[] = [21, 39, 10];
    public pieChartType: string = 'pie';
    public pieChartOptions: any = {
        'backgroundColor': [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56"
        ]
    }


    // Scatter graph
    public scatterChartOptions: ChartOptions = {
        responsive: true,
        scales: {
            xAxes: [{
                gridLines: {
                  display: false,
                  color: "black"
                },
                scaleLabel: {
                  display: true,
                  labelString: "",
                  fontColor: "black"
                },
                ticks: {
                    min: 0,
                    max: 80
                },
                display: false
              }],
              yAxes: [{
                gridLines: {
                    color: "grey",
                    borderDash: [2, 5],
                },
                scaleLabel: {
                  display: true,
                  labelString: "Coverage percentage",
                  fontColor: "black"
                },
                ticks: {
                    min: 0,
                    max: 100
                }
              }]
        }
      };
    
      public scatterChartData: ChartDataSets[] = [
        {
          data: [
            { x: 20, y: 60 },
            { x: 40, y: 78 }
          ],
          label: 'Vaccination Coverage',
          pointRadius: 20,
        },
      ];
      public scatterChartType: ChartType = 'scatter';
      
    public chartHovered(event: any) {
        console.log(event);
    }

    public chartClicked(event) {
        console.log(event);
    }
    
}