import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { GetCustomerByIdService } from 'src/app/services/get-customer-by-id.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-customer-by-id',
  templateUrl: './customer-by-id.component.html',
  styleUrls: ['./customer-by-id.component.scss']
})
export class CustomerByIdComponent implements OnInit {

  customer: any;

  constructor(
    private route: ActivatedRoute,
    private getCustomer: GetCustomerByIdService
  ) { }

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe(params => {
      const customerId = +params['id']; 
      if (isNaN(customerId) || customerId <= 0) {
        console.error('Invalid order ID:', params['id']);

        return;
      }
      this.getCustomerById(customerId);
    });
  }

  getCustomerById(id: number): void {
    this.getCustomer.getCustomerById(id)
      .subscribe(
        (data: any) => {
          this.customer = data;
        },
        (error: any) => {
          console.error('Error fetching order:', error);
        }
      );

}
}