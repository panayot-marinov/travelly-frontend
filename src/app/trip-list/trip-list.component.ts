// trip-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TripList } from '../model/trip-list.model';
import {TripDataService} from "../service/trip-data.service";
import {MatDialog} from "@angular/material/dialog";
import {TripListService} from "../service/trip-list.service";
import {Trip} from "../model/trip.model";
import {DeleteTripDialogComponent} from "../delete-trip-dialog/delete-trip-dialog.component";
import {AddTripDialogComponent} from "../add-trip-dialog/add-trip-dialog.component";
import {TripService} from "../service/trip.service";
import {Router} from "@angular/router";

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
              private router: Router) {}

  ngOnInit(): void {
    this.trips = this.tripDataService.getTrips();
  }

  openAddTripDialog(): void {
    const dialogRef = this.dialog.open(AddTripDialogComponent, {
      width: '400px' // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close event, if needed
    });
  }

  deleteTrip(tripId: number): void {
    this.tripService.deleteTripById(tripId).subscribe(() => {
      // Remove the deleted trip from the local array
      this.trips = this.trips.filter(trip => trip.id !== tripId);
    });
  }

  navigateToTripDetail(tripId: number): void {
    this.router.navigate(['/trip', tripId]); // Assuming you have a 'trip/:id' route
  }

}
