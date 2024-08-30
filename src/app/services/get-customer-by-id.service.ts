import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class GetCustomerByIdService {

  private apiUrl = 'http://localhost:8080/users/'; // Adjust URL if necessary

  constructor(private http: HttpClient) { }

  getCustomerById(): Observable<User> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.get<any>(`${this.apiUrl}/user`, { headers }).pipe(
      catchError(error => {
        console.error('Error fetching customer details:', error);
        return throwError(error); // Proper error handling
      })
    );
    
  }
  updateUser(user: User): Observable<User> {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this.http.put<User>(`${this.apiUrl}/update`, user, { headers }).pipe(
      catchError(error => {
        console.error('Error updating user details:', error);
        return throwError(error); // Proper error handling
      })
    );
  }

 
}


