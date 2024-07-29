import { TestBed } from '@angular/core/testing';

import { GetUserOrderService } from './get-user-order.service';

describe('GetUserOrderService', () => {
  let service: GetUserOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
