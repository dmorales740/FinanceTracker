import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../shared/project';
import { Expense } from '../../../shared/expense';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @Input() project: Project;
  loosingMoney: boolean = false;

  profit: number = 0;
  cost: number = 0;
  loss: number = 0;
  
  // Pie specs
  pieChartInfo = {};
  pieChartLabels: string[] = [];
  pieChartData: number[] = [];

  constructor() { }
  
  ngOnInit() {
    this.calcCost();
    this.calcProfit();
    if (this.profit < 0) {
      this.loss = this.profit * -1;
      this.pieChartLabels = ['Loss', 'Revenue'];
      this.pieChartData = [this.loss, this.project.estimate];
      this.pieChartData[1] = this.project.estimate;
      this.loosingMoney = true;
      this.profit = 0;
    }
    else {
      this.pieChartLabels = ['Cost', 'Profit'];
      this.pieChartData = [this.cost, this.profit];
    }
  }
  calcCost() {
    this.cost = 0;
    for (let i = 0; i < this.project.expenses.length; i++) {
      let expense = this.project.expenses[i];
      this.cost += expense.price * expense.qty;
    }
  }
  calcProfit() {
    this.profit = this.project.estimate - this.cost;
  }

  
}
