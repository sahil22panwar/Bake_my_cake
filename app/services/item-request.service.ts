import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class ItemRequestService {

  //URL: string = "http://localhost:3000/cart";
  constructor(private http: HttpClient) { }

  getAllOrderReqeusts() : Observable<Array<order>> {
    return this.http.get<Array<order>>("http://localhost:8084/api/v2/orders");
  }

  saveorderRequest(orderRequest? : order) : Observable<order> {
    return this.http.post<order>("http://localhost:8085/api/v1/SaveOrder", orderRequest)
  }
}
