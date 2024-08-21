import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/Sidebar/Sidebar.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ServInfoComponent } from './components/serv-info/serv-info.component';
import { UserRegistrationformComponent } from './components/userRegistrationform/userRegistrationform.component';

import { ServOfferedComponent } from './pages/ServOffered/ServOffered.component';
import { HomePageComponent } from './pages/homePage/homePage.component';
import { LandingPageComponent } from './pages/landingPage/landingPage.component';
import { LoginComponent } from './pages/login/login.component';
import { AfricanselectComponent } from './components/africanselect/africanselect.component';
import { CapitecselectComponent } from './components/capitecselect/capitecselect.component';
import { AbsaselectComponent } from './components/absaselect/absaselect.component';
import { AbsapaymentComponent } from './pages/absapayment/absapayment.component';
import { AfricanpaymentComponent } from './pages/africanpayment/africanpayment.component';
import { BankComponent } from './pages/bank/bank.component';
import { CapitecpaymentComponent } from './pages/capitecpayment/capitecpayment.component';
import { ChooseBankComponent } from './pages/chooseBank/chooseBank.component';
import { FnbpaymentComponent } from './pages/fnbpayment/fnbpayment.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { PaymentMethodComponent } from './pages/paymentMethod/paymentMethod.component';
import { PaymentconfirmationComponent } from './pages/paymentconfirmation/paymentconfirmation.component';
import { SelectaccountComponent } from './pages/selectaccount/selectaccount.component';
import { TymepaymentComponent } from './pages/tymepayment/tymepayment.component';
import { TymeselectComponent } from './components/tymeselect/tymeselect.component';
import { FnbselectComponent } from './components/fnbselect/fnbselect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { GetOrdersComponent } from './components/get-orders/get-orders.component';
import { OrderByIdComponent } from './components/order-by-id/order-by-id.component';

import { CustomerByIdComponent } from './components/customer-by-id/customer-by-id.component';

import { GetUserOrderComponent } from './components/get-user-order/get-user-order.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/authInterceptor';


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
    OrderDetailsComponent,
  PaymentMethodComponent,
      ChooseBankComponent,
      BankComponent,
      SelectaccountComponent,
      PaymentconfirmationComponent,
      AbsapaymentComponent,
      CapitecpaymentComponent,
      FnbpaymentComponent,
      AfricanpaymentComponent,
      TymepaymentComponent,
      TymeselectComponent,
       FnbselectComponent,
      AbsaselectComponent,
      AfricanselectComponent,
      CapitecselectComponent,
 UserRegistrationformComponent,
 GetOrdersComponent,
 OrderByIdComponent,

 CustomerByIdComponent,

 GetUserOrderComponent,
  ProfileComponent,

 


      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
