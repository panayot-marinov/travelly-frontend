import { Component } from '@angular/core';
import {AuthService} from "../service/auth.service";
import {Router} from "@angular/router";
import {UserLogin} from "../model/user-login.model";
import {TripList} from "../model/trip-list.model";
import {TripDataService} from "../service/trip-data.service";

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

  constructor(private authService: AuthService, private tripDataService: TripDataService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.userLogin).subscribe(
      (response) => {
        const userId = response['userId'];
        this.authService.getTripsByUserId(userId).subscribe(
          (trips: TripList[]) => {
            this.tripDataService.setTrips(trips);
            this.router.navigate(['trips'], { state: { trips } });
          }
        );
      }
    );
  }
}
