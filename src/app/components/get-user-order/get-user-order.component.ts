import { Component } from '@angular/core';
import { GetUserOrderService } from 'src/app/services/get-user-order.service';
import { Order} from 'src/app/models/Order';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-user-order',
  templateUrl: './get-user-order.component.html',
  styleUrls: ['./get-user-order.component.scss']
})
export class GetUserOrderComponent {

  orders: Order[] = [];
  userId: number = 1; 

  constructor(private getUserOrderService: GetUserOrderService) { }

  ngOnInit(): void {
    this.getUserOrder(this.userId);
  }


  getUserOrder(userId: number): void {
    this.getUserOrderService.getUserOrder(userId)
      .subscribe({
        next: orders => {
          this.orders = orders;
          console.log(this.orders); // Log to check if data is being received
        },
        error: err => console.error('Failed to fetch orders', err)
      });
  }
}
