import { Component, OnInit } from '@angular/core';
import { GetServicesService } from 'src/app/services/get-services.service';
import { Services } from 'src/app/models/Services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ServOffered',
  templateUrl: './ServOffered.component.html',
  styleUrls: ['./ServOffered.component.css']
})
export class ServOfferedComponent implements OnInit {
  services: Services[] = [];

  constructor(private getservices:GetServicesService,private router:Router) { }

  ngOnInit() {
    this.fetchServices();
  }
 

  fetchServices() {
    this.getservices.getServices()
      .subscribe(
        (services: Services[]) => {
          this.services =services;
          console.log('Fetched services:', this.services);
        },
        (error: any) => {
          console.error('Error fetching services:', error);
          // Handle error, show user-friendly message, etc.
        }
      );
  }

  onCardClick(serviceId: number): void {
    this.router.navigate(['/services', serviceId]);
  }
}
