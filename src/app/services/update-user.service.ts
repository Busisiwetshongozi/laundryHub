import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs';
import { LoginService } from './login.service';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UpdateUserService {

  constructor(private loginService:LoginService,private http:HttpClient) { }

  apiUrl='http://localhost:8080/api/users/update'

  updateUser():Observable<User>{
    return this.http.put<User>(this.apiUrl)
  }
}
