import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashBlanketsServInfoComponent } from './wash-blankets-serv-info.component';

describe('WashBlanketsServInfoComponent', () => {
  let component: WashBlanketsServInfoComponent;
  let fixture: ComponentFixture<WashBlanketsServInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WashBlanketsServInfoComponent]
    });
    fixture = TestBed.createComponent(WashBlanketsServInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
