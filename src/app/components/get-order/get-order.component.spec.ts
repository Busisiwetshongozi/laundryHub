import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOrderComponent } from './get-order.component';

describe('GetOrderComponent', () => {
  let component: GetOrderComponent;
  let fixture: ComponentFixture<GetOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetOrderComponent]
    });
    fixture = TestBed.createComponent(GetOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
