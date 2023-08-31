import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {UserLogin} from "../model/user-login.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userLogin: UserLogin = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.userLogin).subscribe(
      (response) => {
        this.router.navigate(['/trips']);
      },
      (error) => {
        // Handle registration error
      }
    );
  }
}
