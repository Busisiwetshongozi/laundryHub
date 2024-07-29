import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserOrderComponent } from './get-user-order.component';

describe('GetUserOrderComponent', () => {
  let component: GetUserOrderComponent;
  let fixture: ComponentFixture<GetUserOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetUserOrderComponent]
    });
    fixture = TestBed.createComponent(GetUserOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
