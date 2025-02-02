import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/Sidebar/Sidebar.component';
import { IronServInfoComponent } from './components/iron-serv-info/iron-serv-info.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ServInfoComponent } from './components/serv-info/serv-info.component';
import { UserRegistrationformComponent } from './components/userRegistrationform/userRegistrationform.component';
import { WashBlanketsServInfoComponent } from './components/wash-blankets-serv-info/wash-blankets-serv-info.component';
import { WashFoldIronComponent } from './components/wash-fold-iron/wash-fold-iron.component';
import { ServOfferedComponent } from './pages/ServOffered/ServOffered.component';
import { HomePageComponent } from './pages/landingPage/homePage/homePage.component';
import { LandingPageComponent } from './pages/landingPage/landingPage.component';
import { LoginComponent } from './pages/landingPage/login/login.component';

import { AfricanselectComponent } from './components/africanselect/africanselect.component';
import { CapitecselectComponent } from './components/capitecselect/capitecselect.component';
import { AbsaselectComponent } from './components/absaselect/absaselect.component';
import { FnbselectComponent } from './fnbselect/fnbselect.component';
import { AbsapaymentComponent } from './pages/absapayment/absapayment.component';
import { AfricanpaymentComponent } from './pages/africanpayment/africanpayment.component';
import { BankComponent } from './pages/bank/bank.component';
import { CapitecpaymentComponent } from './pages/capitecpayment/capitecpayment.component';
import { ChooseBankComponent } from './pages/chooseBank/chooseBank.component';
import { FnbpaymentComponent } from './pages/fnbpayment/fnbpayment.component';
import { OrderDetailsConfirmationComponent } from './pages/order-details-confirmation/order-details-confirmation.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { PaymentMethodComponent } from './pages/paymentMethod/paymentMethod.component';
import { PaymentconfirmationComponent } from './pages/paymentconfirmation/paymentconfirmation.component';
import { SelectaccountComponent } from './pages/selectaccount/selectaccount.component';
import { TymepaymentComponent } from './pages/tymepayment/tymepayment.component';
import { TymeselectComponent } from './tymeselect/tymeselect.component';

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
      ChooseBankComponent,
      BankComponent,
      SelectaccountComponent,
      PaymentconfirmationComponent,
      AbsapaymentComponent,
      CapitecpaymentComponent,
      FnbpaymentComponent,
      AfricanpaymentComponent,
      TymepaymentComponent,
      AbsaselectComponent,
      AfricanselectComponent,
      CapitecselectComponent,
      FnbselectComponent,
      TymeselectComponent
      
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
