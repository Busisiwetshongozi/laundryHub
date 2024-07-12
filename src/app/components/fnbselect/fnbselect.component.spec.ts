import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FnbselectComponent } from './fnbselect.component';

describe('FnbselectComponent', () => {
  let component: FnbselectComponent;
  let fixture: ComponentFixture<FnbselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FnbselectComponent]
    });
    fixture = TestBed.createComponent(FnbselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
