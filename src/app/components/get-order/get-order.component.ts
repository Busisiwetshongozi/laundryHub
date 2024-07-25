import { Component } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { GetOrderService } from 'src/app/services/get-order.service';

@Component({
  selector: 'app-get-order',
  templateUrl: './get-order.component.html',
  styleUrls: ['./get-order.component.scss']
})
export class GetOrderComponent {
  order:Order

  constructor(private getOrder:GetOrderService){}
  

}
