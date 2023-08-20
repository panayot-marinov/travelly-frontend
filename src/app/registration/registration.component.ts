import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  register(): void {
    this.authService.register(this.username, this.password).subscribe(
      response => {
        //handle successful registration
      },
      error => {
        console.error('Registration not successful: ', error);
      }
    );
  }
}
