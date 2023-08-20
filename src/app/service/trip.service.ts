import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trip} from "../model/trip.model";

@Injectable({
  providedIn: 'root'
})
export class TripService {
  private readonly apiUrl: string = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {
  }

  public getTrips(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>(this.apiUrl + '/trips')
  }

  public getTripById(id: number): Observable<Trip> {
    return this.httpClient.get<Trip>(this.apiUrl + '/trips/' + id)
  }
}
