import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../../shared/project';
import { Expense } from '../../../shared/expense';
import { ProjectService } from '../../../services/project.service';

@Component({
    moduleId: module.id,
    selector: 'app-expenses',
    templateUrl: './expenses.component.html',
    styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {
    @Input() project: Project;
    newExpense: Expense;
    addingExpense: boolean;
    total: number;

    constructor(private projectService: ProjectService) {
        this.newExpense = new Expense("", 0, 0);
        this.addingExpense = false;
        this.total = 0;
    }

    ngOnInit() {
        for(let i = 0; i < this.project.expenses.length; i++) {
            this.total += this.project.expenses[i].price * this.project.expenses[i].qty;
        }
        this.total = +(this.total.toFixed(2));
    }
    
    addExpense() {
        this.project.expenses.push(this.newExpense);
        this.projectService.saveProject(this.project)
            .subscribe(
                res => {
                    this.total += this.newExpense.price * this.newExpense.qty;
                    this.total = +(this.total.toFixed(2));
                    this.newExpense = new Expense('', 0, 0);
                },
                error => alert("An error occur adding expense.")
            );
        
    }
}