import { Expense } from '../toolkit/expense';

export class Project {
    id: string = '';
    userId: string = '';
    isFinished: boolean = false;
    date: string;
    title: string = '';
    type: string = 'default';
    budget: number = 0.0;
    estimate: number = 0.0;
    description: string = '';
    expenses: Expense[] = [];

    constructor(id: string) {
        this.userId = id;
        let d = new Date();
        this.date = (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
    }
}

