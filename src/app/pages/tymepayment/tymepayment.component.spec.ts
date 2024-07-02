import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TymepaymentComponent } from './tymepayment.component';

describe('TymepaymentComponent', () => {
  let component: TymepaymentComponent;
  let fixture: ComponentFixture<TymepaymentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TymepaymentComponent]
    });
    fixture = TestBed.createComponent(TymepaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
