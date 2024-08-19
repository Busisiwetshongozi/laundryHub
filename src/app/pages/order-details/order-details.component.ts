import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CreateOrderService } from 'src/app/services/create-order.service';
import { Order } from 'src/app/models/Order';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  serviceId: number | undefined;
  pickupForm: FormGroup;
  submitted = false;
  submittedData: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private createOrder: CreateOrderService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.pickupForm = this.formBuilder.group({
      requireFetch: ['Select'], // Default value is 'Select', adjust as needed
      date: ['', Validators.required],
      time: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.serviceId = Number(this.route.snapshot.paramMap.get('id')); // Capture the serviceId from route parameters
  }

  onNext() {
  
    this.submittedData = this.pickupForm.value;
    this.submitted = true;
    
    console.log('Submitted Data:', this.submittedData);
  }

goBack(): void {
  if (this.serviceId !== undefined) {
    this.router.navigate(['/services']); 
  } else {
    console.error('Service ID is undefined');
  }
}


  onConfirm() {
    if (this.submittedData) {
      this.createOrder.createOrder(this.submittedData)
        .subscribe(
          (response: any) => {
            console.log('Data sent successfully:', response);
            // Optionally, reset form or navigate to a success page
          },
          (error: any) => {
            console.error('Error submitting data:', error);
            // Handle error, show user-friendly message, etc.
          }
        );
    }
  }

 
}
