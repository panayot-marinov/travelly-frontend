import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Itinerary} from "../model/itinerary.model";
import {Accommodation} from "../model/accommodation.model";
import {Activity} from "../model/activity.model";
import {TransportationOption} from "../model/transportation-option.model";
import {AccommodationMap} from "../model/accommodation-map.model";
import {ActivityMap} from "../model/activity-map.model";
import {TransportationOptionMap} from "../model/transportation-option-map.model";

@Injectable({
  providedIn: 'root',
})
export class ItineraryService {
  private apiUrl = 'http://localhost:8080/itineraries';
  private itineraryId: number = -1;

  constructor(private http: HttpClient) {}

  addAccommodations(accommodations: Accommodation[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/${this.getItineraryId()}/accommodations`, accommodations);
  }

  addActivities(activities: Activity[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/${this.getItineraryId()}/activities`, activities);
  }

  addTransportationOptions(transportationOptions: TransportationOption[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/${this.getItineraryId()}/transportationOptions`, transportationOptions);
  }

  getAccommodations(itineraryId: number): Observable<Accommodation[]> {
    return this.http.get<Accommodation[]>(`${this.apiUrl}/${itineraryId}/accommodations`);
  }

  getMapAccommodations(itineraryId: number): Observable<AccommodationMap[]> {
    return this.http.get<AccommodationMap[]>(`${this.apiUrl}/${itineraryId}/accommodations/map`);
  }

  getActivities(itineraryId: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.apiUrl}/${itineraryId}/activities`);
  }

  getMapActivities(itineraryId: number): Observable<ActivityMap[]> {
    return this.http.get<ActivityMap[]>(`${this.apiUrl}/${itineraryId}/activities/map`);
  }

  getTransportationOptions(itineraryId: number): Observable<TransportationOption[]> {
    return this.http.get<TransportationOption[]>(`${this.apiUrl}/${itineraryId}/transportationOptions`);
  }

  getMapTransportationOptions(itineraryId: number): Observable<TransportationOptionMap[]> {
    return this.http.get<TransportationOptionMap[]>(`${this.apiUrl}/${itineraryId}/transportationOptions/map`);
  }

  deleteItineraryById (itineraryId: number): Observable<any> {
    const url = `${this.apiUrl}/${itineraryId}`;
    return this.http.delete<void>(url);
  }

  getItineraryById(itineraryId: number): Observable<Itinerary> {
    const url = `${this.apiUrl}/${itineraryId}`
    return this.http.get<Itinerary>(url);
  }

  updateItinerary(itinerary: Itinerary): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${itinerary.id}`, itinerary);
  }


  setItineraryId(itineraryId: number): void {
    this.itineraryId = itineraryId;
  }

  getItineraryId(): number {
    return this.itineraryId;
  }
}
