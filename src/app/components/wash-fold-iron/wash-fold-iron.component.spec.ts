import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashFoldIronComponent } from './wash-fold-iron.component';

describe('WashFoldIronComponent', () => {
  let component: WashFoldIronComponent;
  let fixture: ComponentFixture<WashFoldIronComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WashFoldIronComponent]
    });
    fixture = TestBed.createComponent(WashFoldIronComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
