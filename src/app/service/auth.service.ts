import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserRegistration} from "../model/user-registration.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl: string = 'http://localhost:8080/users';

  constructor(private http: HttpClient) {}

  register(userRegistration: UserRegistration): Observable<any> {
    console.log(userRegistration)
    return this.http.post(`${this.apiUrl}/register`, userRegistration);
  }

  login (username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(this.apiUrl + '/login', body);
  }
}
