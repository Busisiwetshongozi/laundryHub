import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CreatePaymentService } from 'src/app/services/create-payment.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-absaselect',
  templateUrl: './absaselect.component.html',
  styleUrls: ['./absaselect.component.scss']
})
export class AbsaselectComponent {
  isAccountClicked = false; 

  toggleAccountColor(): void {
    this.isAccountClicked = !this.isAccountClicked;
  }
 

  date: Date = new Date();
  amount: number | null = null;
  

  constructor(private http: HttpClient,private paymentService:CreatePaymentService,private router:Router) {}

  sendData(): void {
    const payload = { date: this.date, amount: this.amount };

    this.paymentService.createPayment(payload)
      .subscribe(
        response => {
          console.log('Success:', response);
          // Navigate to the confirmation page on success
          this.router.navigate(['/user-order']); // Adjust the route as necessary
        },
        error => {
          console.error('Error:', error);
          // Handle error
        }
      );
  }

}
