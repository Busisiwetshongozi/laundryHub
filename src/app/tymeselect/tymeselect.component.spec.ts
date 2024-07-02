import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TymeselectComponent } from './tymeselect.component';

describe('TymeselectComponent', () => {
  let component: TymeselectComponent;
  let fixture: ComponentFixture<TymeselectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TymeselectComponent]
    });
    fixture = TestBed.createComponent(TymeselectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
