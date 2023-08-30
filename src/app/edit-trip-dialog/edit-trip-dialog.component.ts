import {Component, Inject} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Trip} from "../model/trip.model";
import {EditTripDialogService} from "../service/edit-trip-dialog.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

class TripService {
}

@Component({
  selector: 'app-edit-trip-dialog',
  templateUrl: './edit-trip-dialog.component.html',
  styleUrls: ['./edit-trip-dialog.component.css']
})
export class EditTripDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<EditTripDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public trip: Trip
  ) {}

  onSaveClick(): void {
    // Save the changes and close the dialog with the edited trip data
    this.dialogRef.close(this.trip);
  }

  onCancelClick(): void {
    // Cancel the editing and close the dialog without any changes
    this.dialogRef.close();
  }
}
