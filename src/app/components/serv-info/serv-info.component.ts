import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Services } from 'src/app/models/Services';
import { GetServiceService } from 'src/app/services/get-service.service';
import { CreateOrderService } from 'src/app/services/create-order.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-serv-info',
  templateUrl: './serv-info.component.html',
  styleUrls: ['./serv-info.component.scss']
})
export class ServInfoComponent implements OnInit {
  service: Services | undefined;
  submitted = false; // Track if the data has been submitted
  submittedData: any = { // Data structure for additional information
    requireFetch: false,
    date: '',
    time: '',
    name: '',
    email: '',
    address: ''
  };

  constructor(
    private route: ActivatedRoute,
    private getservices: GetServiceService,
    private createOrderService: CreateOrderService,
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getservices.getServiceById(id).subscribe(
      (service: Services) => {
        this.service = service;
        console.log('Fetched service details:', this.service);
      },
      (error: any) => {
        console.error('Error fetching service details:', error);
      }
    );
  }

  placeOrder() {
    if (this.service) {
      const orderData = {
        serviceId: this.service.id,
        serviceName: this.service.name,
        servicePrice: this.service.price,
        // Include additional data from the confirmation div
        requireFetch: this.submittedData.requireFetch,
        pickUpDate: this.submittedData.date,
        pickUpTime: this.submittedData.time,
        fullName: this.submittedData.name,
        email: this.submittedData.email,
        address: this.submittedData.address
      };

      this.createOrderService.createOrder(orderData).subscribe({
        next: (response) => {
          console.log('Order placed successfully', response);
          this.router.navigate(['/order-confirmation']); // Navigate to an order confirmation page or another page
        },
        error: (error) => {
          console.error('Error placing order', error);
          // Handle error here, such as displaying a message to the user
        }
      });
    }
  }
}

