import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CreateCustomerService } from 'src/app/services/create-customer.service'; 
import { User } from 'src/app/models/User'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-userRegistrationform',
  templateUrl: './userRegistrationform.component.html',
  styleUrls: ['./userRegistrationform.component.css']
})
export class UserRegistrationformComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private createCustomerService: CreateCustomerService,private router:Router) {
    this.signupForm = this.formBuilder.group({
     
      email: [''],
      number:[0],
      role:[''],
      address: [''],
      firstName:[''],
      lastName:[''],
      password:['']
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
     
    const customerData: User = {
      firstName: this.signupForm.get('firstName')?.value || '', 
      email: this.signupForm.get('email')?.value || '', 
      number: this.signupForm.get('number')?.value || 0, 
      address: this.signupForm.get('address')?.value || '', 
      role: this.signupForm.get('role')?.value || '', 
      password: this.signupForm.get('password')?.value || '', 
      lastName: this.signupForm.get('lastName')?.value || '' 
  };

      this.createCustomerService.createCustomer(customerData)
        .subscribe(
          response => {
            console.log('Successfully submitted:', response);
            this.signupForm.reset();
            this.router.navigate(['/login']);
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );
    } 
  }




