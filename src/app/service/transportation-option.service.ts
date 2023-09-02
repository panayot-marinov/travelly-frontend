import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {TransportationOption} from "../model/transportation-option.model";

@Injectable({
  providedIn: 'root',
})
export class TransportationOptionService {
  private apiUrl = 'http://localhost:8080/transportationOptions';

  constructor(private http: HttpClient) {}

  deleteTransportationOptionById (transportationOptionId: number): Observable<any> {
    const url = `${this.apiUrl}/${transportationOptionId}`;
    return this.http.delete<void>(url);
  }

  getTransportationOptionById(transportationOptionId: number): Observable<TransportationOption> {
    const url = `${this.apiUrl}/${transportationOptionId}`
    return this.http.get<TransportationOption>(url);
  }

  updateTransportationOption(transportationOption: TransportationOption): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${transportationOption.id}`, transportationOption);
  }

}
