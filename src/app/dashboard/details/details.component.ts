import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { ProjectService } from '../../services/project.service';
//import { UnsavedGuardService } from '../../services/unsaved.guard';

import { Project } from '../../shared/project';
import { OverviewComponent } from './overview/overview.component';

@Component({
    moduleId: module.id,
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css'],
    //entryComponents: [ OverviewComponent ]
})
export class DetailsComponent implements OnInit {
    project: Project;
    showOverview: boolean;
    showExpenses: boolean;
    showReport: boolean;

    constructor(
        private projectService: ProjectService,
        private route: ActivatedRoute,
        private location: Location
    ) {
        this.showOverview = true;
        this.showExpenses = false;
        this.showReport = false;
    }

    ngOnInit() {
        this.project = new Project('');
        this.route.params.switchMap(
            (params: Params) => this.projectService.getProject(params['id']))
            .subscribe(res => {
                this.project = <Project>res;
            }, error => console.log('ERROR: ' + error));
    }
    showTab(o: boolean, e: boolean, s: boolean) {
        this.showOverview = o;
        this.showExpenses = e;
        this.showReport = s;
        return false;
    }
}
