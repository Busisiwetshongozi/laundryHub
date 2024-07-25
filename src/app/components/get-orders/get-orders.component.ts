
import { Component, OnInit } from '@angular/core';
import { GetOrdersService } from '../../services/get-orders.service';
import { Order } from 'src/app/models/Order';
@Component({
  selector: 'app-get-orders',
  templateUrl: './get-orders.component.html',
  styleUrls: ['./get-orders.component.scss']
})
export class GetOrdersComponent implements OnInit {

  orders: Order[] = [];

  constructor(private getOrdersService: GetOrdersService) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    this.getOrdersService.getOrders()
      .subscribe(
        (orders: Order[]) => {
          this.orders = orders;
          console.log('Fetched orders:', this.orders);
        },
        (error: any) => {
          console.error('Error fetching orders:', error);
          // Handle error, show user-friendly message, etc.
        }
      );
  }

}
