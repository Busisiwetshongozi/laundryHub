import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/Order'; 
@Injectable({
  providedIn: 'root'
})
export class CreateOrderService {

  private apiUrl = 'http://localhost:8080/api/orders/add'; 

  constructor(private http: HttpClient) { }

  createOrder(orderData: any): Observable<Order> {
    return this.http.post<Order>(this.apiUrl, orderData);
  }
}
