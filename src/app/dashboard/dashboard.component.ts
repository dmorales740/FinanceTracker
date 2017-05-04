import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { ProjectService } from '../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projectsSelected = true;
  helpSelected = false;
  deleteAccount: boolean = false;

  constructor(
    private userService: UserService,
    private projectService: ProjectService,
    private router: Router
  ) { }

  ngOnInit() { }

  selectTab(p: boolean, h: boolean) {
    this.projectsSelected = p;
    this.helpSelected = h;
  }

  signOut() {
    this.userService.signOut();
  }

  private deleteAccountAlert() {
    this.deleteAccount = true;
    return false;
  }

  private deleteUserAccount() {

    this.projectService.removeUserProjects(this.userService.getUserId())
      .subscribe(
        res => {
          this.userService.deleteAccount()
            .subscribe(
              res => {
                this.deleteAccount = false;
                this.signOut();
                this.router.navigate(['/']);
              }, error => alert('Unable to delete account. ' + <any>error)
            );
        }, error => alert('Unable to remove projects. ' + <any>error)
      );
  }
}
