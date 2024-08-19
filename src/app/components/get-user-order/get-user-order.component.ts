import { Component, OnInit } from '@angular/core';
import { GetUserOrderService } from 'src/app/services/get-user-order.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-get-user-order',
  templateUrl: './get-user-order.component.html',
  styleUrls: ['./get-user-order.component.scss']
})
export class GetUserOrderComponent implements OnInit {

  orders: Order[] = [];

  constructor(private getUserOrderService: GetUserOrderService) { }

  ngOnInit(): void {
    this.getUserOrders();
  }

  getUserOrders(): void {
    this.getUserOrderService.getUserOrder()
      .subscribe(
        (data: Order[]) => {
          this.orders = data;
        },
        (error: any) => {
          console.error('Error fetching user orders:', error);
          // Add more specific error handling or user feedback here
        }
      );
  }
}
