import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'FinanceTracker';
  isLoggedIn: boolean;
  username: string;

  constructor(private userService: UserService) {
    this.isLoggedIn = false;
  }
  ngOnInit() {
    if(this.userService.isLoggedIn()) {
      this.isLoggedIn = true;
      if(localStorage.getItem('user') != null) {
        this.username = localStorage.getItem('user');
      }
      else {
        this.username = sessionStorage.getItem('user');
      }
    }
  }
}
