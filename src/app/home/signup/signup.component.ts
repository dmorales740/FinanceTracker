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

  ngOnInit() {
  }
  registerUser() {
      this.router.navigate(['/login']);
  }
}
