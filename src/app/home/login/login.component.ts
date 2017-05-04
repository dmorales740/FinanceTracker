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
  ngOnInit() { }
  
  login() {
    if (this.user.username.trim() === "" || this.user.password.trim() === "") {
      this.msg = "You must fillout all fields.";
      return;
    }
    this.userService.login(this.user)
      .subscribe(res => {
        if (this.keepLoggedIn) {
          localStorage.setItem('id', res._id);
          localStorage.setItem('user', res.username);
        }
        else {
          sessionStorage.setItem('id', res._id);
          sessionStorage.setItem('user', res.username);
        }
        this.router.navigate(['/dashboard']);
      }, error => this.msg = <any>error);
  }
}
