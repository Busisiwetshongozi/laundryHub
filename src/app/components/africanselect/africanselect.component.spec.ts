import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfricanselectComponent } from './africanselect.component';

describe('AfricanselectComponent', () => {
  let component: AfricanselectComponent;
  let fixture: ComponentFixture<AfricanselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfricanselectComponent]
    });
    fixture = TestBed.createComponent(AfricanselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
