import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';

import { Project } from '../shared/project';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw'; 

@Injectable()
export class ProjectService {
    userId: string;
    apiURL: string;
    
    constructor(
        private http: Http
    ) {
        this.init();
        this.apiURL = environment.apiURL;
    }
    init() {
        if (localStorage.getItem('id') != null) {
            this.userId = localStorage.getItem('id');
        }
        else {
            this.userId = sessionStorage.getItem('id');
        }
    }

    saveProject(project: Project) {
        let body = JSON.stringify(project);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiURL + 'project/update', body, options )
            .map(response => response.json())
            .catch(this.handleError);
    }

    getProjectList() {
        const body = 'userId=' + this.userId;
        const headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiURL + 'project/all', body, options )
            .map(response => response.json())
            .catch(this.handleError);
    }

    addProject(project: Project) {
        const body = JSON.stringify(project);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const options = new RequestOptions({ headers: headers });

        return this.http.post(this.apiURL + 'project/add', body, options )
            .map(response => response.json())
            .catch(this.handleError);
    }
    getProject(id: string) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const params = new URLSearchParams();
        params.set('id', id);
        const options = new RequestOptions({ headers: headers, search: params});
        
        return this.http.get(this.apiURL + 'project/details', options)
            .map(response => response.json())
            .catch(this.handleError);
            
    }

    removeUserProjects(id) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const params = new URLSearchParams();
        params.set('id', id);
        const options = new RequestOptions({ headers: headers, search: params});
        
        return this.http.delete(this.apiURL + 'project/remove-all', options)
            .map(response => response.text())
            .catch(this.handleError);
        
    }
    removeProject(id) {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const params = new URLSearchParams();
        params.set('id', id);
        const options = new RequestOptions({ headers: headers, search: params});
        
        return this.http.delete(this.apiURL + 'project/remove', options)
            .map(response => response.json())
            .catch(this.handleError);
        
    }

    handleError(error: Response | any) {
        return Observable.throw(error._body);
    }

}