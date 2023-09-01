import { Injectable } from '@angular/core';
import {TripList} from "../model/trip-list.model";

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private tripsData: TripList[] = [];

  setTrips(trips: TripList[]): void {
    this.tripsData = trips;
  }

  getTrips(): TripList[] {
    return this.tripsData;
  }
}
