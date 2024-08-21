import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) { }




  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.loginService.currentUser.pipe(
      map(user => !!user), // Check if user is logged in
      tap(isLoggedIn => {
        if (!isLoggedIn) {
          console.log('Access denied - Not logged in');
          this.router.navigate(['/login']); // Redirect to login page if not logged in
        }
      })
    );
  }}

