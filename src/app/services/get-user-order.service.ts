import { Order } from 'src/app/models/Order';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GetUserOrderService {

  constructor( private http :HttpClient) { }
  apiUrl = 'http://localhost:8080/api/orders/user';

 

  getUserOrder(): Observable<Order[]> {
    const token = localStorage.getItem('authToken'); // Or however you store the token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<Order[]>(this.apiUrl, { headers });
  }
}
