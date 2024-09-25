import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode'; // Correct for named export


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
    const token = this.getToken();
    if (!token) {
      return of(false);
    }
    return of(this.isTokenValid(token));
  }

  private isTokenValid(token: string): boolean {
    try {
      const decodedToken: any = jwtDecode(token); // Correct function name
      const expiry = decodedToken.exp * 1000; // Convert to milliseconds
      return expiry > Date.now();
    } catch (e) {
      console.error('Token decoding error:', e);
      return false;
    }
  }
}

