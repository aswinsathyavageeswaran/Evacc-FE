import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard-pie-chart',
    templateUrl: './dashboard-pie-chart.component.html',
    styleUrls: ['./dashboard-pie-chart.component.scss']
})
export class DashboardPieChartComponent {

    public pieChartLabels: string[] = ["Pending", "InProgress", "OnHold", "Complete", "Cancelled"];
    public pieChartData: number[] = [21, 39, 10, 14, 16];
    public pieChartType: string = 'doughnut';
    public pieChartOptions: any = {
        'backgroundColor': [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
        ]
    }

    public chartHovered(event: any) {
        console.log(event);
    }

    public chartClicked(event) {
        console.log(event);
    }
}