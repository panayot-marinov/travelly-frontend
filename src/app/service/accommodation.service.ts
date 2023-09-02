import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Accommodation} from "../model/accommodation.model";

@Injectable({
  providedIn: 'root',
})
export class AccommodationService {
  private apiUrl = 'http://localhost:8080/accommodations';

  constructor(private http: HttpClient) {}

  deleteAccommodationById (accommodationId: number): Observable<any> {
    const url = `${this.apiUrl}/${accommodationId}`;
    return this.http.delete<void>(url);
  }

  getAccommodationById(accommodationId: number): Observable<Accommodation> {
    const url = `${this.apiUrl}/${accommodationId}`
    return this.http.get<Accommodation>(url);
  }

  updateAccommodation(accommodation: Accommodation): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${accommodation.id}`, accommodation);
  }

}
