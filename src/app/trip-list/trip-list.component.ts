import {Component, OnInit} from '@angular/core';
import {TripListModel} from "../model/trip-list.model";
import {TripListService} from "../service/trip-list.service";
import {Trip} from "../model/trip.model";

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
    private tripListService: TripListService
  ) {
  }
}