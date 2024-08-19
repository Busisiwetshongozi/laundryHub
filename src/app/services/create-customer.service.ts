import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User} from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class CreateCustomerService {

  private apiUrl = 'http://localhost:8080/auth/signup';


  constructor(private http: HttpClient) {}

  createCustomer(user: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, user);
  }


      
}

