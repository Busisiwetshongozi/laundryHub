import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-absapayment',
  templateUrl: './absapayment.component.html',
  styleUrls: ['./absapayment.component.scss']
})
export class AbsapaymentComponent implements OnInit {
  payForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.payForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.payForm.valid) {
      console.log('Form Data:', this.payForm.value);
      this.router.navigate(['/success']);
    } else {
      console.log('Form is invalid');
    }
  }

  onCancel(): void {
    console.log('Cancel button clicked');
   
  }
}
