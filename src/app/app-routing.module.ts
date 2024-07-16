import { FnbpaymentComponent } from './pages/fnbpayment/fnbpayment.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landingPage/landingPage.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { OrderDetailsConfirmationComponent } from './pages/order-details-confirmation/order-details-confirmation.component';
import { PaymentMethodComponent } from './pages/paymentMethod/paymentMethod.component';
import { ChooseBankComponent } from './pages/chooseBank/chooseBank.component';
import { BankComponent } from './pages/bank/bank.component';
import { AbsapaymentComponent } from './pages/absapayment/absapayment.component';
import { AfricanpaymentComponent } from './pages/africanpayment/africanpayment.component';
import { TymepaymentComponent } from './pages/tymepayment/tymepayment.component';
import { TymeselectComponent } from './components/tymeselect/tymeselect.component';
import { AfricanselectComponent } from './components/africanselect/africanselect.component';
import { AbsaselectComponent } from './components/absaselect/absaselect.component';
import { SelectaccountComponent } from './pages/selectaccount/selectaccount.component';
import { FnbselectComponent } from './components/fnbselect/fnbselect.component';
import { PaymentconfirmationComponent } from './pages/paymentconfirmation/paymentconfirmation.component';
import { UserRegistrationformComponent } from './components/userRegistrationform/userRegistrationform.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home
  { path: 'home', component: LandingPageComponent },
  {path:'order',component:OrderDetailsComponent},
  { path: 'register', component:UserRegistrationformComponent },
{ path: 'login', component:LoginComponent },

  { path: 'confirm', component: OrderDetailsConfirmationComponent },
  { path: 'payment', component: PaymentMethodComponent },
  { path: 'bank', component:ChooseBankComponent },
  { path: 'absa', component:AbsapaymentComponent },

  { path: 'select', component: AbsaselectComponent },
  { path: 'success', component:PaymentconfirmationComponent },
 


];

  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
