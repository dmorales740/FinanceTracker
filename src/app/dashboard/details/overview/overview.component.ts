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
    }
    saveProject() {
        this.projectService.saveProject(this.project)
            .subscribe(res => {
                if(res.nModified > 0 && res.ok == 1) {
                    this.editProject = false;
                } else {
                    alert('Unable to update project.');
                }
            }, error => alert('Unable to update project. ' + error)
        );
    }
}
