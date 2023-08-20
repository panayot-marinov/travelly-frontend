import {Component, Input, OnInit} from '@angular/core';
import {TripDetailsModel} from "../model/trip-details.model";
import {TripDetailsService} from "../service/trip-details.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ItemService} from "../service/item.service";

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
    private tripService: TripDetailsService,
    private itemService: ItemService
  ) {}

  public ngOnInit(): void {
    const tripIdParam = this.route.snapshot.paramMap.get('id');

    if(tripIdParam != null) {
      const tripId = +tripIdParam;
      this.tripService.getTripById(tripId).subscribe(
        (data) => {
          this.trip = data;
        },
        (error) => {
          console.error('Cannot fetch trip by id: ', error);
        }
      )
    }
  }

  public loadTrips(): void {
    this.router.navigate(['/trips']);
  }

}
