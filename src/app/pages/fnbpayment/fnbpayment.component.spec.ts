import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnbpaymentComponent } from './fnbpayment.component';

describe('FnbpaymentComponent', () => {
  let component: FnbpaymentComponent;
  let fixture: ComponentFixture<FnbpaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FnbpaymentComponent]
    });
    fixture = TestBed.createComponent(FnbpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
