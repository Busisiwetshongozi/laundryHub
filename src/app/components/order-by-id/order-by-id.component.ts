import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { GetOrderService } from 'src/app/services/get-order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-by-id',
  templateUrl: './order-by-id.component.html',
  styleUrls: ['./order-by-id.component.scss']
})
export class OrderByIdComponent implements OnInit {

  order: any;

  constructor(
    private route: ActivatedRoute,
    private getOrderService: GetOrderService
  ) { }

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe(params => {
      const orderId = +params['id']; // Use + or parseInt() to convert to number
      if (isNaN(orderId) || orderId <= 0) {
        console.error('Invalid order ID:', params['id']);
        // Handle invalid ID scenario (e.g., show error message, redirect, etc.)
        return;
      }
      this.getOrderById(orderId);
    });
  }

  getOrderById(id: number): void {
    this.getOrderService.getOrderById(id)
      .subscribe(
        (data: any) => {
          this.order = data;
        },
        (error: any) => {
          console.error('Error fetching order:', error);
        }
      );
}
}