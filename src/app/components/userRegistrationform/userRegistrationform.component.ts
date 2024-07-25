import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateCustomerService } from 'src/app/services/create-customer.service'; // Adjust the path as per your project structure
import { Customer } from 'src/app/models/Customer'; // Adjust the path as per your project structure

@Component({
  selector: 'app-userRegistrationform',
  templateUrl: './userRegistrationform.component.html',
  styleUrls: ['./userRegistrationform.component.css']
})
export class UserRegistrationformComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private createCustomerService: CreateCustomerService) {
    this.signupForm = this.formBuilder.group({
      name: [''],
      email: [''],
      number: Number,
      address: ['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
     
      const customerData: Customer = {
        name: this.signupForm.get('name')?.value,
        email: this.signupForm.get('email')?.value,
        number: this.signupForm.get('number')?.value,
        address: this.signupForm.get('address')?.value
      };

      this.createCustomerService.createCustomer(customerData)
        .subscribe(
          response => {
            console.log('Successfully submitted:', response);
            this.signupForm.reset();
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );
    } 
  }




