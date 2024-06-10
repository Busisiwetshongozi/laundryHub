import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserRegistrationformComponent } from './components/userRegistrationform/userRegistrationform.component';
import { SidebarComponent } from './components/Sidebar/Sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingPageComponent } from './pages/landingPage/landingPage.component';
import { HomePageComponent } from './pages/landingPage/homePage/homePage.component';
import { LoginComponent } from './pages/landingPage/login/login.component';


@NgModule({
  declarations: [				
    AppComponent,
      UserRegistrationformComponent,
      SidebarComponent,
      NavbarComponent,
      LandingPageComponent,
      HomePageComponent,
      LoginComponent
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
