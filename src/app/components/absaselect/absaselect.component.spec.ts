import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsaselectComponent } from './absaselect.component';

describe('AbsaselectComponent', () => {
  let component: AbsaselectComponent;
  let fixture: ComponentFixture<AbsaselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbsaselectComponent]
    });
    fixture = TestBed.createComponent(AbsaselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
