import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[] = [];
  temp: Customer = {name: ''};
  p = 1;
  customerSearch: FormGroup = new FormGroup({
    name: new FormControl()
  });

  constructor(private customerService: CustomerService) {
    this.customerService.getAllCustomer(this.customerSearch.value.name).subscribe(data => {
      this.customers = data;
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  getAll() {

    this.customerService.getAllCustomer(this.customerSearch.value.name).subscribe(customer => {
      this.customers = customer;
    });
  }

  reload() {
    this.getAll();
  }

  search() {
    this.customerService.getAllCustomer(this.customerSearch.value.name).subscribe(data => {
      this.customers = data;
    });
  }
}
