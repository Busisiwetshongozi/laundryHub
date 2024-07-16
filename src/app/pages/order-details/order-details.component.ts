import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit{

  pickupForm: FormGroup;
  submitted = false;
  submittedData: any = {};
  
  

  constructor(private formBuilder: FormBuilder) {
    this.pickupForm = this.formBuilder.group({
      requireFetch: ['Select'], // Default value is 'Select', adjust as needed
      pickupDate: ['', Validators.required],
      pickupTime: ['', Validators.required],
      fullName: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
      // Save form data and set submitted flag
      this.submittedData = this.pickupForm.value;
      this.submitted = true;
      
      console.log('Submitted Data:', this.submittedData);
   
}
}