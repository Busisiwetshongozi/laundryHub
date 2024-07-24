import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';


@Injectable({
  providedIn: 'root'
})
export class CreateCustomerService {

 constructor(private http:HttpClient ){}
 private apiUrl = 'http://localhost:8080/api/customers/add'; 

 

 createCustomer(customer: Customer): Observable<Customer> {
  return this.http.post<Customer>(this.apiUrl,customer);
 }
}
