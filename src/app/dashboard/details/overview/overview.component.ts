import { Component, Input } from '@angular/core';

import { ProjectService } from '../../../services/project.service';
import { Project } from '../../../shared/project';

@Component({
    moduleId: module.id,
    selector: 'app-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.css']
})
export class OverviewComponent {
    @Input() project: Project;
    editProject: boolean;

    constructor(private projectService: ProjectService) {
        this.editProject = false;
        //alert(this.project.title);
    }
    saveProject() {
        this.editProject = false;
    }
}
