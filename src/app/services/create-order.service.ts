import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../models/Order'; 
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class CreateOrderService {

  private apiUrl = 'http://localhost:8080/api/orders/add'; 

  constructor(private http: HttpClient,private loginService:LoginService) { }

  createOrder(orderData: any): Observable<Order> {
    const token = this.loginService.getToken(); // Retrieve the token from the AuthService
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<Order>(this.apiUrl, orderData, { headers });
  }
}
