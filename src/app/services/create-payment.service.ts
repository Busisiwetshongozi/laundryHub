import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from '../models/Payment'; 

@Injectable({
  providedIn: 'root'
})
export class CreatePaymentService {

  constructor(private http:HttpClient) { }

  apiUrl='http://localhost:8080/api/payments/add'

  createPayment(paymentData: any): Observable<Payment> {
    return this.http.post<Payment>(this.apiUrl, paymentData);
  }
}
