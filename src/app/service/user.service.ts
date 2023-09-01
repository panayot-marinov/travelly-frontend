import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserRegistration} from "../model/user-registration.model";
import {UserLogin} from "../model/user-login.model";
import {Trip} from "../model/trip.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly apiUrl: string = 'http://localhost:8080/users';
  private userId: number = -1;

  constructor(private http: HttpClient) {}

  register(userRegistration: UserRegistration): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, userRegistration);
  }

  login (userLogin: UserLogin): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, userLogin);
  }

  getTripsByUserId (userId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${userId}/trips`);
  }

  addTrip(trip: Trip): Observable<any> {
    return this.http.post(`${this.apiUrl}/${this.getUserId()}/trips`, trip);
  }


  setUserId(userId: number): void {
    this.userId = userId;
  }

  getUserId(): number {
    return this.userId;
  }
}
