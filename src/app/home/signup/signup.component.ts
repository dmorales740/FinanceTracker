import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user: User;
  repass: string;
  msg: String;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router) {
    this.user = new User();
    this.user.username = "";
    this.user.password = "";
    this.repass = "";
    this.msg = "";
  }

  ngOnInit() { }

  registerUser() {
    if (this.user.username.trim() === "" || this.user.password.trim() === "") {
      this.msg = 'You must fill out all fields.';
      return;
    }
    
    this.userService.registerUser(this.user)
      .subscribe(response => {
        this.router.navigate(['/login']);
      }, error => {
        this.msg = <any>error;
      });
  }
}