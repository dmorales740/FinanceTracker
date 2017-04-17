import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  projectsSelected = true;
  reportsSelected = false;
  helpSelected = false;

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit() { }

  selectTab(p: boolean, r: boolean, h: boolean) {
    this.projectsSelected = p;
    this.reportsSelected = r;
    this.helpSelected = h;
  }

  signOut() {
    this.userService.signOut();
  }
}
