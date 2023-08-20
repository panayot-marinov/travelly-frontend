import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item} from "../model/item.model";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private readonly apiUrl: string = 'http://localhost:8080';

  constructor(private httpClient:HttpClient) {}

  public getTripItemsByTripId(tripId: number): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.apiUrl + '/trips' + tripId + '/items');
  }
}
