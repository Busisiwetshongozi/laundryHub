import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';

@Injectable({
  providedIn: 'root'
})
export class CreateCustomerService {

  private apiUrl = 'http://localhost:8080/auth/signup';


  constructor(private http: HttpClient) {}

  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.apiUrl, customer);
  }


      
}

