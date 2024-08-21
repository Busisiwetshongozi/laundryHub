import { FnbpaymentComponent } from './pages/fnbpayment/fnbpayment.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landingPage/landingPage.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
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
import { OrderByIdComponent } from './components/order-by-id/order-by-id.component';
import { CustomerByIdComponent } from './components/customer-by-id/customer-by-id.component';
import { ServOfferedComponent } from './pages/ServOffered/ServOffered.component';
import { ServInfoComponent } from './components/serv-info/serv-info.component';
import { GetUserOrderComponent } from './components/get-user-order/get-user-order.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to home
  { path: 'home', component: LandingPageComponent },
  {path:'order',component:OrderDetailsComponent,canActivate: [AuthGuard] },
  { path: 'register', component:UserRegistrationformComponent },
{ path: 'login', component:LoginComponent },
{ path: 'services', component:ServOfferedComponent , canActivate: [AuthGuard]},
{ path: 'services/:id', component: ServInfoComponent ,canActivate: [AuthGuard] , },
{ path: 'payment', component: PaymentMethodComponent ,canActivate: [AuthGuard] },
  { path: 'bank', component:ChooseBankComponent ,canActivate: [AuthGuard] },
  { path: 'absa', component:AbsapaymentComponent ,canActivate: [AuthGuard] },
{ path: 'select', component: AbsaselectComponent,canActivate: [AuthGuard]  },
  { path: 'success', component:PaymentconfirmationComponent ,canActivate: [AuthGuard] },
  { path: 'orders/:id', component: OrderByIdComponent,canActivate: [AuthGuard]  },
  { path: 'customers/:id',component:CustomerByIdComponent ,canActivate: [AuthGuard] },
  { path: 'user-order',component:GetUserOrderComponent ,canActivate: [AuthGuard] },


];

  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
