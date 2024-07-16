import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userRegistrationform',
  templateUrl: './userRegistrationform.component.html',
  styleUrls: ['./userRegistrationform.component.css']
})
export class UserRegistrationformComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.http.post('/api/customers/add', this.signupForm.value)
        .subscribe(
          response => {
            console.log('Successfully submitted:', response);
            // Optionally, reset the form
            this.signupForm.reset();
          },
          error => {
            console.error('Error submitting form:', error);
          }
        );
    }
  }
}

