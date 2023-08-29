import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Trip } from '../model/trip.model';

@Component({
  selector: 'app-delete-trip-dialog',
  templateUrl: './delete-trip-dialog.component.html',
})
export class DeleteTripDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteTripDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public trip: Trip
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close();
  }

  public onDeleteClick(): void {
    this.dialogRef.close(true);
  }
}
