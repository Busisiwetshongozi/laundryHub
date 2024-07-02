import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderDetailsConfirmationComponent } from './order-details-confirmation.component';

describe('OrderDetailsConfirmationComponent', () => {
  let component: OrderDetailsConfirmationComponent;
  let fixture: ComponentFixture<OrderDetailsConfirmationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderDetailsConfirmationComponent]
    });
    fixture = TestBed.createComponent(OrderDetailsConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
