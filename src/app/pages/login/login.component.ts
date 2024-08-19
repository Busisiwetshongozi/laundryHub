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
        // Assuming the token is in response.token
        if (response && response.token) {
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['/services']); 
        } else {
          console.error('Login response did not contain a token.');
        }
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}



