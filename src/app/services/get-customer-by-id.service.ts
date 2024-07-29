import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/Customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCustomerByIdService {

  constructor(private http:HttpClient) { }
apiUrl='http://localhost:8080/api/customers'

getCustomerById(id: number): Observable<Customer> {
  return this.http.get<Customer>(`${this.apiUrl}/${id}`);
}

}
