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
  temp: Customer={name: ''};

  constructor(private customerService: CustomerService) {
    this.customerService.getAllCustomer().subscribe(data => {
      this.customers = data;
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  getAll(){
    this.customerService.getAllCustomer().subscribe(customer => {
      this.customers = customer
    });
  }

  reload(){
    this.getAll()
  }
}
