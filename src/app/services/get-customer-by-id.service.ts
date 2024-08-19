import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCustomerByIdService {

  constructor(private http:HttpClient) { }
apiUrl='http://localhost:8080/api/customers'

getCustomerById(id: number): Observable<User> {
  return this.http.get<User>(`${this.apiUrl}/${id}`);
}

}
