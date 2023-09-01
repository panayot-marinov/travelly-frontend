import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripList } from '../model/trip-list.model';
import {Trip} from "../model/trip.model";
import {UserRegistration} from "../model/user-registration.model";

@Injectable({
  providedIn: 'root',
})
export class TripService {
  private apiUrl = 'http://localhost:8080/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<TripList[]> {
    return this.http.get<TripList[]>(this.apiUrl);
  }

  getTripById(tripId: number): Observable<Trip> {
    const url = `${this.apiUrl}/${tripId}`
    return this.http.get<Trip>(url);
  }

  updateTripById(trip: Trip): Observable<any> {
    return this.http.patch(`${this.apiUrl}`, trip);
  }

  register(userRegistration: UserRegistration): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userRegistration);
  }

  deleteTripById (tripId: number): Observable<any> {
     const url = `${this.apiUrl}/${tripId}`;
     return this.http.delete<void>(url);
  }
}
