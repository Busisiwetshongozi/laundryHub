import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitecselectComponent } from './capitecselect.component';

describe('CapitecselectComponent', () => {
  let component: CapitecselectComponent;
  let fixture: ComponentFixture<CapitecselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CapitecselectComponent]
    });
    fixture = TestBed.createComponent(CapitecselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
