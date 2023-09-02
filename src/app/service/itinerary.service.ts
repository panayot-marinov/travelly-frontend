import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Itinerary} from "../model/itinerary.model";
import {Accommodation} from "../model/accommodation.model";
import {Activity} from "../model/activity.model";
import {TransportationOption} from "../model/transportation-option.model";

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

  getActivities(itineraryId: number): Observable<Activity[]> {
    return this.http.get<Activity[]>(`${this.apiUrl}/${itineraryId}/activities`);
  }

  getTransportationOptions(itineraryId: number): Observable<TransportationOption[]> {
    return this.http.get<TransportationOption[]>(`${this.apiUrl}/${itineraryId}/transportationOptions`);
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
