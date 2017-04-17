import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;
  msg: string;
  keepLoggedIn: boolean;

  constructor(
    private userService: UserService,
    private router: Router) {
    this.user = new User();
    this.user.username = "";
    this.user.password = "";
    this.msg = "";
    this.keepLoggedIn = true;
  }
  ngOnInit() {
  }
  login() {
    this.router.navigate(['/dashboard']);
  }
}
