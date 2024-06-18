import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricanpaymentComponent } from './africanpayment.component';

describe('AfricanpaymentComponent', () => {
  let component: AfricanpaymentComponent;
  let fixture: ComponentFixture<AfricanpaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfricanpaymentComponent]
    });
    fixture = TestBed.createComponent(AfricanpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
