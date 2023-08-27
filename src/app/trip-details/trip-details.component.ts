import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDetailsModel } from '../model/trip-details.model';
import { TripDetailsService } from '../service/trip-details.service';
import { MatDialog } from '@angular/material/dialog';
import { EditTripDialogComponent } from '../edit-trip-dialog/edit-trip-dialog.component';

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
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const tripIdParam = this.route.snapshot.paramMap.get('id');

    if (tripIdParam != null) {
      const tripId = +tripIdParam;
      this.tripService.getTripById(tripId).subscribe(
        (data) => {
          this.trip = data;
        },
        (error) => {
          console.error('Cannot fetch trip by id: ', error);
        }
      );
    }
  }

  openEditTripDialog(): void {
    const dialogRef = this.dialog.open(EditTripDialogComponent, {
      width: '400px', // Adjust the width as needed
      data: this.trip // Pass the current trip data to the dialog
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle dialog close event, if needed
      if (result) {
        // Update the trip data if the dialog was closed with changes
        this.trip = result;
      }
    });
  }

  loadTrips(): void {
    this.router.navigate(['/trips']);
  }
}
