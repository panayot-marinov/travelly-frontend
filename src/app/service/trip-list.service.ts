import { Injectable } from '@angular/core';
import {TripListModel} from "../model/trip-list.model";

@Injectable({
  providedIn: 'root'
})
export class TripListService {
  private trips: TripListModel[] = [
    { id: 1, name: 'aaa', destination: 'Paris' },
    { id: 2, name: 'bbb', destination: 'New York'}
  ]

  public getTrips(): TripListModel[] {
    return this.trips;
  }

  constructor() { }
}
