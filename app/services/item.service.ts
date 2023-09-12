import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  URL: string = "http://localhost:3000/items";
  constructor(private http: HttpClient) { }

  getAllItems(): Observable<Array<item>> {
    return this.http.get<Array<item>>(this.URL)
  }

  getItem(id?: string) : Observable<item>{
    console.log(id);
    return this.http.get<item>(`${this.URL}/${id}`);
  }
}
