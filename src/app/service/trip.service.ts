import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripList } from '../model/trip-list.model';
import {Trip} from "../model/trip.model";
import {Itinerary} from "../model/itinerary.model";
import {Accommodation} from "../model/accommodation.model";
import {Activity} from "../model/activity.model";
import {TransportationOption} from "../model/transportation-option.model";
import {Item} from "../model/item.model";

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

  getItems(tripId: number): Observable<Item[]> {
    const url = `${this.apiUrl}/${tripId}/items`
    return this.http.get<Item[]>(url);
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

  addItems(tripId: number, items: Item[]): Observable<any> {
    const url = `${this.apiUrl}/${tripId}/items`;
    return this.http.post(url, items);
  }

  getRecommendedAccommodations(tripId: number, queryParams: string): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(`${this.apiUrl}/${tripId}/accommodations/recommend?${queryParams}`);
  }

  getRecommendedActivities(tripId: number, queryParams: string): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.apiUrl}/${tripId}/activities/recommend?${queryParams}`);
  }

  getRecommendedTransportationOptions(tripId: number, queryParams: string): Observable<TransportationOption[]> {
    return this.http.get<TransportationOption[]>(`${this.apiUrl}/${tripId}/transportationOptions/recommend?${queryParams}`);
  }

  setTripId(tripId: number): void {
    this.tripId = tripId;
  }

  getTripId(): number {
    return this.tripId;
  }
}
