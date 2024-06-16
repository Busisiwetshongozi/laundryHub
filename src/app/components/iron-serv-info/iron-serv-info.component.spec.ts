import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IronServInfoComponent } from './iron-serv-info.component';

describe('IronServInfoComponent', () => {
  let component: IronServInfoComponent;
  let fixture: ComponentFixture<IronServInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IronServInfoComponent]
    });
    fixture = TestBed.createComponent(IronServInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
