import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentconfirmationComponent } from './paymentconfirmation.component';

describe('PaymentconfirmationComponent', () => {
  let component: PaymentconfirmationComponent;
  let fixture: ComponentFixture<PaymentconfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentconfirmationComponent]
    });
    fixture = TestBed.createComponent(PaymentconfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
