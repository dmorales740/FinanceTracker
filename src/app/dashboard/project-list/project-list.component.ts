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
    msg: string;

    constructor(
        private projectService: ProjectService,
        private userService: UserService
    ) {
        this.newProject = new Project(this.userService.getUserId());
    }
    ngOnInit(): void {
        this.projectService.getProjectList()
            .subscribe(list => {
                for (let i = 0; i < list.length; i++) {
                    this.projects.push(<Project>list[i]);
                }
            }, 
            error => alert(error)
        );
    }
    addNewProject() {
        let aProject = this.newProject;
        if(this.newProject.type === 'default' || this.newProject.title === '') {
            this.msg = 'Type and title are required.';
            return false;
        }
        this.projectService.addProject(aProject)
            .subscribe(
                res => {
                    aProject.id = res.id;
                    this.projects.push(aProject);
                }, error => alert('ERROR: ' + error)
            );
        this.newProject = new Project(this.userService.getUserId());
    }
    clearNewProject() {
        console.log(this.projects[1].date.toDateString());
    }
    xclearNewProject() {
        this.newProject.title = '';
        this.newProject.type = 'default';
        this.newProject.budget = 0;
        this.newProject.estimate = 0;
        this.msg = '';
    }
}
