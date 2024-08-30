import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/Payment'; 
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class CreatePaymentService {

  private baseUrl = 'http://localhost:8080/api/payments'; 

  constructor(private http: HttpClient, private loginService: LoginService) { }

  // Method to create a payment
  createPayment(orderData: any): Observable<Payment> {
    const token = this.loginService.getToken(); // Retrieve the token from the AuthService
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<Payment>(`${this.baseUrl}/add`, orderData, { headers });
  }

  // Method to fetch payment details for the logged-in user
  getUserPaymentDetails(): Observable<Payment[]> {
    const token = this.loginService.getToken(); // Retrieve the token from the AuthService
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Payment[]>(`${this.baseUrl}/user`, { headers });
  }

  
}

