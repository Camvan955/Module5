import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[] = [];
  temp: Customer = {name: ''};
  p = 1;
  name = '';
  email = '';
  phoneNumber = '';

  constructor(private customerService: CustomerService) {
    this.customerService.getAllCustomer(this.name, this.email, this.phoneNumber).subscribe(data => {
      this.customers = data;
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  getAll(name: string, email: string, phoneNumber: string) {
    this.customerService.getAllCustomer(name, email, phoneNumber).subscribe(customer => {
      this.customers = customer;
    });
  }

  reload() {
    this.getAll(this.name, this.email, this.phoneNumber);
  }

  search(name: string, email: string, phoneNumber: string) {
    this.getAll(name, email, phoneNumber);
  }
}
