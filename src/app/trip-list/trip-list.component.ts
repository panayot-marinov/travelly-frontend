// trip-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TripList } from '../model/trip-list.model';
import {TripDataService} from "../service/trip-data.service";
import {MatDialog} from "@angular/material/dialog";
import {TripListService} from "../service/trip-list.service";
import {TripService} from "../service/trip.service";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css'],
})
export class TripListComponent implements OnInit {
  trips: TripList[] = [];

  constructor(private tripDataService: TripDataService,
              private dialog: MatDialog,
              private tripListService: TripListService,
              private tripService: TripService,
              private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.trips = this.tripDataService.getTrips();
  }

  redirectToAddTripPage(): void {
    this.router.navigate(['/users/', this.userService.getUserId(), "trips"]);
  }

  deleteTrip(tripId: number): void {
    this.tripService.deleteTripById(tripId).subscribe(() => {
      this.trips = this.trips.filter(trip => trip.id !== tripId);
    });
  }

  navigateToTripDetail(tripId: number): void {
    this.router.navigate(['/trips', tripId]);
  }

}
