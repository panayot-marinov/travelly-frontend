import {Component, Input, OnInit} from '@angular/core';
import {TripDetailsModel} from "../model/trip-details.model";
import {TripDetailsService} from "../service/trip-details.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class TripDetailsComponent implements OnInit {
  trip: TripDetailsModel | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tripService: TripDetailsService
  ) {}

  public ngOnInit(): void {
    const tripIdParam = this.route.snapshot.paramMap.get('id');

    if(tripIdParam != null) {
      const tripId = +tripIdParam;
      this.trip = this.tripService.getTrip();
    }
  }

  public loadTrips(): void {
    this.router.navigate(['/trips']);
  }

}
