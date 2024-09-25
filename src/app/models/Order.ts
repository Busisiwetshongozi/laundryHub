import { Time } from "@angular/common";
import { Services } from "./Services";

export interface Order{
   
    status?: string;
    serviceIds?: number[]; // Changed to match backend expectations
    paymentId?: number;
    services?: Services[];


}