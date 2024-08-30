import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  logout(): void {
    localStorage.removeItem('authToken');
    this.currentUserSubject.next(null);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  getCurrentUser(): any {
    const token = this.getToken();
    return token ? { token } : null;
  }

  isLoggedIn(): Observable<boolean> {
    return this.currentUserSubject.asObservable().pipe(
      map(user => !!user) // Return true if user exists (i.e., logged in)
    );
  }
}
