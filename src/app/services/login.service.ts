import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:8080/auth/login'; 


  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(this.getCurrentUser());
public currentUser: Observable<any> = this.currentUserSubject.asObservable();


  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.apiUrl, { email, password })
      .pipe(
        map(response => {
          if (response.token && response.id) {
            localStorage.setItem('authToken', response.token);
            this.currentUserSubject.next(response);
            console.log('Login response:', response);
          }
          return response;
        }),
        catchError(error => {
          console.error('Login error:', error);
          throw error;
        })
      );
  }
  
  testAuthHeader(): void {
    const token = localStorage.getItem('authToken');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    this.http.get(this.apiUrl, { headers }).subscribe(
      response => console.log('Response:', response),
      error => console.error('Error:', error)
    );
  }
  
  

  logout(): void {
    localStorage.removeItem('authToken');
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken'); // Direct retrieval of the token
  }

  getUserId(): number | null {
    const token = this.getToken();
    return null; // Return appropriate user ID or null
  }
  
  

  // Method to get the current user object
  getCurrentUser(): any {
    const token = this.getToken();
    return token ? { token } : null;
  }
}