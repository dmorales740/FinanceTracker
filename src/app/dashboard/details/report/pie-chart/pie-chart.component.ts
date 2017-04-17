import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../../shared/project';
import '../../../../../../node_modules/chart.js/dist/Chart.bundle.min.js';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  
  // Pie specs
  @Input() pieChartLabels: string[] = [];
  @Input() pieChartData: number[] = [];
  public pieChartType: string = 'pie';

  constructor() { }

  ngOnInit() { }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
