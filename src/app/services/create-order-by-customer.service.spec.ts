import { TestBed } from '@angular/core/testing';

import { CreateOrderByCustomerService } from './create-order-by-customer.service';

describe('CreateOrderByCustomerService', () => {
  let service: CreateOrderByCustomerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateOrderByCustomerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
