import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/project';
import { ProjectService } from '../../services/project.service';
import { UserService } from '../../services/user.service';

@Component({
    moduleId: module.id,
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    projects: Project[] = [];
    newProject: Project;

    constructor(
        private projectService: ProjectService,
        private userService: UserService
    ) {
        this.newProject = new Project(this.userService.getUserId());
        // Hard coded project
        let aProject = new Project('123');
        aProject.title = 'Example Hard Coded Project';
        aProject.estimate = 1000;
        aProject.budget = 500;
        aProject.description = 'Here is the project description...';
        aProject.type = 'business';
        this.projects.push(aProject);
    }
    ngOnInit(): void { }
    
    addNewProject() {
        return false;
    }
    clearNewProject() {
        this.newProject.title = '';
        this.newProject.type = 'default';
        this.newProject.budget = 0;
        this.newProject.estimate = 0;
    }
}
