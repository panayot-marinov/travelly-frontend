import { Component } from '@angular/core';
import {Trip} from "../model/trip.model";
import {ActivatedRoute} from "@angular/router";
import {TripService} from "../service/trip.service";
import {DateService} from "../service/date.service";

@Component({
  selector: 'app-trip-view-edit',
  templateUrl: './trip-view-edit.component.html',
  styleUrls: ['./trip-view-edit.component.css']
})
export class TripViewEditComponent {
  tripId: number = -1;
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

  constructor(private route: ActivatedRoute, private tripService: TripService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const tripIdParam = params.get('tripId');
      if (tripIdParam !== null) {
        this.tripId = +tripIdParam;
        this.tripService.getTripById(this.tripId).subscribe(
          (trip: any) => {
            this.trip = trip;
            this.trip.startDate = DateService.convertNumberArrayToDate(trip.startDate)
            this.trip.endDate = DateService.convertNumberArrayToDate(trip.endDate)
          });
      }});
  }

  updateTrip() {
    this.tripService.updateTripById(this.trip).subscribe();
  }

}

