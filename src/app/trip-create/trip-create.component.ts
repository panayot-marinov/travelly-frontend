import { Component } from '@angular/core';
import {Trip} from "../model/trip.model";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-trip-create',
  templateUrl: './trip-create.component.html',
  styleUrls: ['./trip-create.component.css']
})
export class TripCreateComponent {
  trip: Trip = new Trip(
    0,
    '',
    '',
    new Date(),
    new Date(),
    0,
    '',
    []
  );

  constructor(private userService: UserService) { }

  addTrip() {
    this.userService.addTrip(this.trip).subscribe();
  }
}
