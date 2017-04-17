import { Expense } from './expense';

export class Project {
    id: string = '';
    userId: string = '';
    isFinished: boolean = false;
    date: Date;
    stringDate: string;
    stringTime: string;
    title: string = '';
    type: string = 'default';
    budget: number = 0.0;
    estimate: number = 0.0;
    description: string = '';
    expenses: Expense[] = [];

    constructor(id: string) {
        this.userId = id;
        this.date = new Date();
        this.stringDate = (this.date.getMonth() + 1) + '/' + this.date.getDate() + '/' + this.date.getFullYear();
        this.stringTime = this.date.getHours() + ':' + this.date.getMinutes();
        this.stringTime += this.date.getHours() < 12 ? 'am' : 'pm';
    }
}

