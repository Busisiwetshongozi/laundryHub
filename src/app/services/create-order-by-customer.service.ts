import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Order } from '../models/Order';  

@Injectable({
  providedIn: 'root'
})
export class CreateOrderByCustomerService {

  private apiUrl = 'http://localhost:8080/orders/add'; 

  constructor(private http: HttpClient) { }


  createOrderByUser(customerId: number, order: Order): Observable<Order> {
    const url = `${this.apiUrl}/${customerId}`;  // Construct the URL with the customer ID
    return this.http.post<Order>(url, order, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'  // Ensure the backend expects JSON
      })
    });
  }
}

