import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {UserRegistration} from "../model/user-registration.model";
import {HttpClient} from "@angular/common/http";


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

  constructor(private authService: AuthService) {}

  onSubmit() {
    this.authService.register(this.userRegistration).subscribe(
      (response) => {

      },
      (error) => {
        // Handle registration error
      }
    );
  }
}
