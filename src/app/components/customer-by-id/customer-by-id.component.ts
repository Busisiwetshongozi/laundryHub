import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { GetCustomerByIdService } from 'src/app/services/get-customer-by-id.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-by-id',
  templateUrl: './customer-by-id.component.html',
  styleUrls: ['./customer-by-id.component.scss']
})
export class CustomerByIdComponent  {

  customer: any;

  constructor(
    private route: ActivatedRoute,
    private getCustomer: GetCustomerByIdService
  ) { }

}