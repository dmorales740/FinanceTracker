import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { User } from '../shared/user';

@Injectable()
export class UserService {
  private apiURL: string;

  constructor(private http: Http) {
    this.apiURL = environment.apiURL;
  }

  signOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('id');
    sessionStorage.removeItem('user');
    sessionStorage.removeItem('id');
  }
  login(user: User) {
    let body = 'username=' + user.username + '&password=' + user.password;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiURL + 'user/login', body, options)
      .map(response => response.json())
      .catch(this.handleError);
  }
  isLoggedIn(): boolean {
    if (
      localStorage.getItem('user') != null ||
      sessionStorage.getItem('user') != null) {
      return true;
    }
    else {
      return false;
    }
  }
  getUserId(): string {
    if(localStorage.getItem('id')) {
      return localStorage.getItem('id');
    }
    else {
      return sessionStorage.getItem('id');
    }
  }
  //Registers a new user
  registerUser(user: User) {
    let body = 'username=' + user.username + '&password=' + user.password;
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.apiURL + 'user/signup', body, options)
      .map(response => response.json())
      .catch(this.handleError);
  }

  deleteAccount() {
      const headers = new Headers({ 'Content-Type': 'application/json' });
      const params = new URLSearchParams();
      params.set('id', this.getUserId());
      const options = new RequestOptions({ headers: headers, search: params});
        
      return this.http.delete(this.apiURL + 'user/remove', options)
          .map(response => response.text())
          .catch(this.handleError);
  }

  private handleError(error: Response | any) {
    return Observable.throw(error._body);
  }
  private xhandleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      console.log(body);
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
