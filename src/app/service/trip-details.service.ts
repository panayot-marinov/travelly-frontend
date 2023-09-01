import { Injectable } from '@angular/core';
import {TripList} from "../model/trip-list.model";
import {TripDetailsModel} from "../model/trip-details.model";
import {Observable} from "rxjs";
import {Trip} from "../model/trip.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TripDetailsService {
  // private trip: TripDetailsModel = { id: 1, name: 'aaa', destination: 'Paris' }

  // public getTrip(): TripDetailsModel {
  //   return this.trip;
  // }

  // public getTripById(id: number): TripDetailsModel | undefined {
  //   return this.trips.find(trip => trip.id === id);
  // }

  private readonly apiUrl: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  public getTripById(id: number): Observable<Trip> {
    console.log('Searching for a trip with id ', id);
    return this.httpClient.get<Trip>(this.apiUrl + '/trips/' + id);
  }
}
