import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Trip } from '../model/trip.model';
import { Observable } from 'rxjs';
import {EditTripDialogComponent} from "../edit-trip-dialog/edit-trip-dialog.component";

@Injectable({
  providedIn: 'root'
})
export class EditTripDialogService {
  constructor(private dialog: MatDialog) {}

  public openEditTripDialog(trip: Trip): Observable<Trip | undefined> {
    const dialogRef: MatDialogRef<EditTripDialogComponent> = this.dialog.open(EditTripDialogComponent, {
      width: '400px', // Adjust the width as needed
      data: trip
    });

    return dialogRef.afterClosed();
  }
}
