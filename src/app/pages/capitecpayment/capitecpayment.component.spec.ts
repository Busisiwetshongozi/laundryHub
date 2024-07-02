import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitecpaymentComponent } from './capitecpayment.component';

describe('CapitecpaymentComponent', () => {
  let component: CapitecpaymentComponent;
  let fixture: ComponentFixture<CapitecpaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapitecpaymentComponent]
    });
    fixture = TestBed.createComponent(CapitecpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
