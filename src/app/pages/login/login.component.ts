import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  onLogin(): void {
    this.loginService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        if (response && response.token) {
          localStorage.setItem('authToken', response.token); // Ensure the token key matches
          this.router.navigate(['/order']); 
        } else {
          console.error('Login response did not contain a token.');
        }
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });}
}



