import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsapaymentComponent } from './absapayment.component';

describe('AbsapaymentComponent', () => {
  let component: AbsapaymentComponent;
  let fixture: ComponentFixture<AbsapaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsapaymentComponent]
    });
    fixture = TestBed.createComponent(AbsapaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
