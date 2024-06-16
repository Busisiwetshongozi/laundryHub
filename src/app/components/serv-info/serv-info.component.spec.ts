import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServInfoComponent } from './serv-info.component';

describe('ServInfoComponent', () => {
  let component: ServInfoComponent;
  let fixture: ComponentFixture<ServInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServInfoComponent]
    });
    fixture = TestBed.createComponent(ServInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
