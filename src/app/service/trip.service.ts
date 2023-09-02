import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripList } from '../model/trip-list.model';
import {Trip} from "../model/trip.model";
import {Itinerary} from "../model/itinerary.model";

@Injectable({
  providedIn: 'root',
})
export class TripService {
  private apiUrl = 'http://localhost:8080/trips';
  private tripId = -1;

  constructor(private http: HttpClient) {}

  getItineraries(tripId: number): Observable<Itinerary[]> {
    const url = `${this.apiUrl}/${tripId}/itineraries`
    return this.http.get<Itinerary[]>(url);
  }

  getTripById(tripId: number): Observable<Trip> {
    const url = `${this.apiUrl}/${tripId}`
    return this.http.get<Trip>(url);
  }

  updateTrip(trip: Trip): Observable<any> {
    return this.http.patch(`${this.apiUrl}`, trip);
  }

  deleteTripById (tripId: number): Observable<any> {
     const url = `${this.apiUrl}/${tripId}`;
     return this.http.delete<void>(url);
  }

  addItinerary(tripId: number, itinerary: Itinerary): Observable<any> {
     const url = `${this.apiUrl}/${tripId}/itineraries`;
     return this.http.post(url, itinerary);
  }

  setTripId(tripId: number): void {
    this.tripId = tripId;
  }

  getTripId(): number {
    return this.tripId;
  }
}
