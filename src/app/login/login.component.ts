import { Component } from '@angular/core';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";
import {UserLogin} from "../model/user-login.model";
import {TripList} from "../model/trip-list.model";
import {TripDataService} from "../service/trip-data.service";
import {DateService} from "../service/date.service";

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

  constructor(private authService: UserService, private tripDataService: TripDataService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.userLogin).subscribe(
      (response) => {
        const userId = response['userId'];
        this.authService.getTripsByUserId(userId).subscribe(
          (tripsData: any[]) => {
            const trips: TripList[] = tripsData.map((tripData) => {
              return new TripList(
                tripData.id,
                tripData.name,
                tripData.destination,
                DateService.convertNumberArrayToDate(tripData.startDate),
                DateService.convertNumberArrayToDate(tripData.endDate)
              );
            });

            this.tripDataService.setTrips(trips);
            this.router.navigate(['trips'], { state: { trips } });
          }
        );
      }
    );
  }
}
