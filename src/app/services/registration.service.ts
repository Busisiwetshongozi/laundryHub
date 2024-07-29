import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {


  private apiUrl = '/api/customers/add';  

  constructor(private http: HttpClient) { }

  submitRegistration(formData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, formData);
  }

 
}
