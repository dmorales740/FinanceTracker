import { Project } from './project';

export class ProjectHandler {
    projects: Project[];
    count: number;

    constructor() {
        this.count = 0;
    }
    addProject(p: Project) {
        this.projects.push(p);
        this.count++;
    }
    getDate(date: Date): string {
        return (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();
    }
    getTime(date: Date): string {
        let time = date.getHours() + ':' + date.getMinutes();
        time += date.getHours() < 12 ? 'am' : 'pm';
        return time;
    }
    
}
