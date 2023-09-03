import { Component } from '@angular/core';
import {Trip} from "../model/trip.model";
import {UserService} from "../service/user.service";
import {TripService} from "../service/trip.service";
import {Router} from "@angular/router";

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

  constructor(private userService: UserService, private tripService: TripService, private router: Router) { }

  addTrip() {
    this.userService.addTrip(this.trip).subscribe(
      (tripId: number) => {
        this.tripService.addItems(tripId, this.trip.items).subscribe();
        this.router.navigate(['/trips/', tripId, "itineraries-create"]);
      }
    );
  }

  addItem() {
    this.trip.items.push({ id: 0, name: '', description: '', amount: 0, isPacked: false });
    console.log(this.trip.items)
  }

  deleteItem(itemName: string) {
    this.trip.items = this.trip.items.filter(item => item.name !== itemName);
    console.log(this.trip.items)
  }
}
