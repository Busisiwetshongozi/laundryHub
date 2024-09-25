import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/User';
import { CreateOrderService } from 'src/app/services/create-order.service';
import { GetCustomerByIdService } from 'src/app/services/get-customer-by-id.service';

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
  user: User | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private createOrder: CreateOrderService,
    private router: Router,
    private route: ActivatedRoute,
    private getCustomerById: GetCustomerByIdService
  ) {
    this.pickupForm = this.formBuilder.group({
      requireFetch: ['Select'],
      date: ['', Validators.required],
      time: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.serviceId = Number(this.route.snapshot.paramMap.get('id'));

    console.log('Fetching customer details...');

    this.getCustomerById.getCustomerById().subscribe(
      (data: User) => {
        console.log('Customer details fetched:', data);
        this.user = data;
        if (this.user) {
          this.pickupForm.patchValue({
            name: this.user.firstName,
            email: this.user.email,
            address: this.user.address
            // Consider handling other fields or default values here
          });
        }
      },
      (error) => {
        console.error('Error fetching customer details:', error);
        // Optional: Provide user feedback here
      }
    );
  }

  onNext() {
    this.submittedData = this.pickupForm.value;
    this.submitted = true;
    console.log('Submitted Data:', this.submittedData);
    // Optional: Perform validation or additional operations here
  }

  goBack(): void {
    if (this.serviceId !== undefined) {
      this.router.navigate(['services']);
    } else {
      console.error('Service ID is undefined');
      // Optional: Provide user feedback here
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
            // Optional: Provide user feedback here
          }
        );
    }
  }
}


