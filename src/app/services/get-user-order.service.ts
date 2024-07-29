import { Order } from 'src/app/models/Order';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetUserOrderService {

  constructor( private http :HttpClient) { }

apiUrl='http://localhost:8080/orders/customer'


getUserOrder(userId: number): Observable<Order[]> {
  const url = `${this.apiUrl}/${userId}`;
  return this.http.get<Order[]>(url);
}
}
