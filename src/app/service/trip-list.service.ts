import { Injectable } from '@angular/core';
import {TripListModel} from "../model/trip-list.model";
import {Observable} from "rxjs";
import {Trip} from "../model/trip.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TripListService {
  private readonly apiUrl: string = 'http://localhost:8080';

  // private trips: TripListModel[] = [
  //   { id: 1, name: 'aaa', destination: 'Paris' },
  //   { id: 2, name: 'bbb', destination: 'New York'}
  // ]
  //
  // public getTrips(): TripListModel[] {
  //   return this.trips;
  // }

  constructor(private httpClient:HttpClient) {
    // this.apiUrl = apiUrl;
  }

  public getTrips(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>(this.apiUrl + '/trips')
  }

  public getTripById(id: number): Observable<Trip> {
    return this.httpClient.get<Trip>(this.apiUrl + '/trips/' + id)
  }
}
