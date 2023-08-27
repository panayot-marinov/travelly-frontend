import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Trip } from '../model/trip.model';
import {TripListComponent} from "../trip-list/trip-list.component";
import {TripListService} from "../service/trip-list.service"; // Import your Trip model

@Component({
  selector: 'app-add-trip-dialog',
  templateUrl: './add-trip-dialog.component.html',
  styleUrls: ['./add-trip-dialog.component.css']
})
export class AddTripDialogComponent {
  newTrip: Trip = new Trip(
    0, // id
    '', // name
    '', // destination
    new Date(), // startDate
    new Date(), // endDate
    0, // budget
    '', // interests
    [], // items
    []  // users
  ); // Create a new Trip instance

  constructor(
    public dialogRef: MatDialogRef<AddTripDialogComponent>,
    private tripListService: TripListService
  ) {}

  public addTrip(): void {
    // Add the new trip using the service
    this.tripListService.addTrip(this.newTrip);

    // Close the dialog
    this.dialogRef.close();
  }
}
