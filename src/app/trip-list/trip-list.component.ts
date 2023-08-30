import {Component, OnInit} from '@angular/core';
import {TripListModel} from "../model/trip-list.model";
import {TripListService} from "../service/trip-list.service";
import {Trip} from "../model/trip.model";
import {DeleteTripDialogComponent} from "../delete-trip-dialog/delete-trip-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips: Trip[] = [];
  // nextId: number = 1;
  // newId!: string;
  // newName!: string;
  // newDesc!: Date;
  //
  // public addTrip(): void {
  //   const newTrip: Trip = new Trip(
  //     this.nextId,
  //     this.
  //   )
  // }

  ngOnInit(): void {
    this.tripListService.getTrips().subscribe(
      (data) => {
        this.trips = data;
      },
      (error) => {
        console.error('Error fetching trips: ', error);
      }
    );
  }
  constructor(
    private dialog: MatDialog,
    private tripListService: TripListService
  ) { }

  openDeleteTripDialog(trip: Trip): void {
    const dialogRef = this.dialog.open(DeleteTripDialogComponent, {
      width: '400px',
      data: trip,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'confirm') {
        this.tripListService.deleteTrip(trip.id).subscribe(
          () => {
            // Remove the trip from the list on successful deletion
            const index = this.trips.indexOf(trip);
            if (index !== -1) {
              this.trips.splice(index, 1);
            }
          },
          (error) => {
            console.error('Error deleting trip:', error);
          }
        );
      }
    });
  }
}
