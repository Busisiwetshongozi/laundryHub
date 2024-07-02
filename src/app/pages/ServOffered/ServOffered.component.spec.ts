/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ServOfferedComponent } from './ServOffered.component';

describe('ServOfferedComponent', () => {
  let component: ServOfferedComponent;
  let fixture: ComponentFixture<ServOfferedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServOfferedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServOfferedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
