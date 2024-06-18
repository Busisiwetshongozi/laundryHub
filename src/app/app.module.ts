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
import { ServOfferedComponent } from './pages/ServOffered/ServOffered.component';
import { ServInfoComponent } from './components/serv-info/serv-info.component';
import { IronServInfoComponent } from './components/iron-serv-info/iron-serv-info.component';
import { WashBlanketsServInfoComponent } from './components/wash-blankets-serv-info/wash-blankets-serv-info.component';
import { WashFoldIronComponent } from './components/wash-fold-iron/wash-fold-iron.component';

import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderDetailsConfirmationComponent } from './pages/order-details-confirmation/order-details-confirmation.component';
import { PaymentMethodComponent } from './pages/paymentMethod/paymentMethod.component';
import { ChooseBankComponent } from './pages/chooseBank/chooseBank.component';

@NgModule({
  declarations: [				
    AppComponent,
      UserRegistrationformComponent,
      SidebarComponent,
      NavbarComponent,
      LandingPageComponent,
      HomePageComponent,
      LoginComponent,
      ServOfferedComponent,
      ServInfoComponent,
      IronServInfoComponent,
      WashBlanketsServInfoComponent,
      WashFoldIronComponent,
     OrderDetailsComponent,
    OrderDetailsConfirmationComponent,
      PaymentMethodComponent,
      ChooseBankComponent
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
