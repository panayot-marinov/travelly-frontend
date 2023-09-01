// trip-list.component.ts
import { Component, OnInit } from '@angular/core';
import { TripList } from '../model/trip-list.model';
import {TripDataService} from "../service/trip-data.service";

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css'],
})
export class TripListComponent implements OnInit {
  trips: TripList[] = [];

  constructor(private tripDataService: TripDataService) {}

  ngOnInit(): void {
    this.trips = this.tripDataService.getTrips();
  }
}
