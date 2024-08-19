import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CreatePaymentService } from 'src/app/services/create-payment.service';

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
  

  constructor(private http: HttpClient,private paymentService:CreatePaymentService) {}

  sendData() {
const payload = { date: this.date, amount: this.amount };

    
    this.http.post('http://localhost:8080/api/payments/add', payload)
      .subscribe(
        response => {
          console.log('Success:', response);
          // Handle success, such as redirecting or updating the UI
        },
        error => {
          console.error('Error:', error);
          // Handle error
        }
      );
}}
