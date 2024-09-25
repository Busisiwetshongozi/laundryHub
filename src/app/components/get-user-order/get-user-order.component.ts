import { Component, OnInit } from '@angular/core';
import { GetUserOrderService } from 'src/app/services/get-user-order.service';
import { CreatePaymentService } from 'src/app/services/create-payment.service';
import { Order } from 'src/app/models/Order';
import { Payment } from 'src/app/models/Payment';
import { Services } from 'src/app/models/Services';

@Component({
  selector: 'app-get-user-order',
  templateUrl: './get-user-order.component.html',
  styleUrls: ['./get-user-order.component.scss']
})
export class GetUserOrderComponent implements OnInit {

  orders: Order[] = [];
  payments: { [key: number]: Payment | null } = {};  // Use number as the key type for paymentId

  constructor(
    private getUserOrderService: GetUserOrderService,
    private createPaymentService: CreatePaymentService
  ) { }

  ngOnInit(): void {
    this.getUserOrders();
  }

  getUserOrders(): void {
    this.getUserOrderService.getUserOrder()
      .subscribe(
        (data: Order[]) => {
          this.orders = data;
          this.fetchPaymentsForOrders(data);
        },
        (error: any) => {
          console.error('Error fetching user orders:', error);
        }
      );
  }

  fetchPaymentsForOrders(orders: Order[]): void {
    this.createPaymentService.getUserPaymentDetails()
      .subscribe(
        (payments: Payment[]) => {
          console.log('Fetched Payments:', payments); // Log payments to check if they are being fetched
          payments.forEach(payment => {
            this.payments[payment.id] = payment;  // Store payments by their ID
            console.log(`Payment stored for ID ${payment.id}:`, payment);
          });
        },
        (error: any) => {
          console.error('Error fetching payment details:', error);
        }
      );
  }
}



