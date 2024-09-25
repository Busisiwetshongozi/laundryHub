import { Component, OnInit } from '@angular/core';
import { GetCustomerByIdService } from 'src/app/services/get-customer-by-id.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User | undefined;

  constructor(private getCustomer: GetCustomerByIdService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser(): void {
    this.getCustomer.getCustomerById().subscribe(
      (data: User) => {
        this.user = data;
      },
      (error: any) => {
        console.error('Error fetching user details:', error);
      }
    );
  }

  updateUser(): void {
    if (this.user) { // Check if user is defined
      this.getCustomer.updateUser(this.user).subscribe(
        (data: User) => {
          this.user = data; // Update the user data with the response
        },
        (error: any) => {
          console.error('Error updating user details:', error);
        }
      );
    } else {
      console.error('User data is not defined.');
    }
  }



}





