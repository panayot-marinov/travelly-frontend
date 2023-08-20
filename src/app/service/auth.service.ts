import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly apiUrl: string = 'http://localhost.8080';

  constructor(private http: HttpClient) {}

  login (username: string, password: string): Observable<any> {
    const body = { username, password };
    return this.http.post(this.apiUrl + '/login', body);
  }
}
