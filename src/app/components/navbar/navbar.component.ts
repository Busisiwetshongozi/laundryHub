import { Component, OnInit, HostListener } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn = false;
  isDesktop = true;
  isMenuOpen = false; // Track whether the menu is open

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.checkLoginStatus();
    this.updateScreenSize();
  }

  checkLoginStatus(): void {
    this.loginService.isLoggedIn().subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.updateScreenSize();
  }

  updateScreenSize(): void {
    this.isDesktop = window.innerWidth > 676;
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen; // Toggle the menu open state
  }

  logout(): void {
    this.loginService.logout();
    this.checkLoginStatus(); // Update login status after logout
  }
}
