import { Injectable } from '@angular/core';
import {TripListModel} from "../model/trip-list.model";
import {TripDetailsModel} from "../model/trip-details.model";

@Injectable({
  providedIn: 'root'
})
export class TripDetailsService {
  private trip: TripDetailsModel = { id: 1, name: 'aaa', destination: 'Paris' }

  public getTrip(): TripDetailsModel {
    return this.trip;
  }

  // public getTripById(id: number): TripDetailsModel | undefined {
  //   return this.trips.find(trip => trip.id === id);
  // }

  constructor() { }
}
