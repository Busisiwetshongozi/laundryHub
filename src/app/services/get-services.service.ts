import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Services } from '../models/Services';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetServicesService {
  apiUrl='http://localhost:8080/api/services/all'

  constructor(private http:HttpClient) { }

  getServices(): Observable<Services[]> {
    return this.http.get<Services[]>(`${this.apiUrl}`);
  }
}
