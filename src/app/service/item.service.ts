import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Item} from "../model/item.model";

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private apiUrl = 'http://localhost:8080/items';

  constructor(private http: HttpClient) {}

  deleteItemById (itemId: number): Observable<any> {
    const url = `${this.apiUrl}/${itemId}`;
    return this.http.delete<void>(url);
  }

  getItemById(itemId: number): Observable<Item> {
    const url = `${this.apiUrl}/${itemId}`
    return this.http.get<Item>(url);
  }

  updateItem(item: Item): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${item.id}`, item);
  }

}
