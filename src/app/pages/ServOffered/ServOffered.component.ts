import { Component, OnInit } from '@angular/core';
import { GetServicesService } from 'src/app/services/get-services.service';
import { Services } from 'src/app/models/Services';
import { Router } from '@angular/router';
import { CreateOrderService } from 'src/app/services/create-order.service';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-ServOffered',
  templateUrl: './ServOffered.component.html',
  styleUrls: ['./ServOffered.component.css']
})
export class ServOfferedComponent implements OnInit {
  services: Services[] = [];
  selectedServices: Services[] = []; // Array to hold selected services

  constructor(
    private getservices: GetServicesService,
    private orderService: CreateOrderService,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchServices();
  }

  fetchServices() {
    this.getservices.getServices()
      .subscribe(
        (services: Services[]) => {
          this.services = services;
          console.log('Fetched services:', this.services);
        },
        (error: any) => {
          console.error('Error fetching services:', error);
        }
      );
  }

  onServiceSelect(service: Services): void {
    // Navigate to the service details page
    this.router.navigate(['/services', service.id]);
  }

  createOrder(): void {
    if (this.selectedServices.length === 0) {
      console.warn('No services selected');
      return;
    }

    // Map selectedServices to an array of IDs
    const serviceIds = this.selectedServices.map(service => service.id);

    const order: Order = {
      status: 'Pending', // Set appropriate status
      serviceIds: serviceIds // Pass only the IDs
      // Optionally, include userId and paymentId if you have them
    };

    this.orderService.createOrder(order)
      .subscribe(
        (createdOrder: Order) => {
          console.log('Order created:', createdOrder);
          this.router.navigate(['/orders', createdOrder.serviceIds]);
        },
        (error: any) => {
          console.error('Error creating order:', error);
        }
      );
  }
}


