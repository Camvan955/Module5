import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  @Input()
  customer: Customer = {};

  @Output()
  emiter = new EventEmitter();

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
  }

  deleteCustomer() {
    // @ts-ignore
    this.customerService.deleteById(this.customer.id).subscribe(data => {
      this.emiter.emit('hi');
    });
    document.getElementById('deleteCustomer')?.click();
  }
}
