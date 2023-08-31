import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserRegistration} from "../model/user-registration.model";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  userRegistration: UserRegistration = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.userRegistration).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        // Handle registration error
      }
    );
  }
}
