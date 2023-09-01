import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TripList } from '../model/trip-list.model';

@Injectable({
  providedIn: 'root',
})
export class TripService {
  private apiUrl = 'http://localhost:8080/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<TripList[]> {
    return this.http.get<TripList[]>(this.apiUrl);
  }

  deleteTripById (tripId: number): Observable<any> {
     const url = `${this.apiUrl}/${tripId}`;
     return this.http.delete<void>(url);
  }
}
