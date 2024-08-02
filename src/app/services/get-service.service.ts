import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Services } from '../models/Services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetServiceService {

  constructor(private http:HttpClient) { }

  apiUrl='http://localhost:8080/api/services';

  
  getServiceById(id: number): Observable<Services> {
    return this.http.get<Services>(`${this.apiUrl}/${id}`);
  }
}
