import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/Order';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetOrdersService {

  private apiUrl = 'http://localhost:8080/api/orders/all'; 

  constructor(private http: HttpClient) { }

 
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrl}`);
  }
}
