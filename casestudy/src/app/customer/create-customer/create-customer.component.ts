import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
import {CustomerType} from '../customer-type';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer: Customer[] = [];
  customerType: CustomerType[] = [];
  creatForm: FormGroup;

  constructor(private customerService: CustomerService,
              private route: Router) {
    this.creatForm = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern('KH-[0-9]{4}')]),
      name: new FormControl('', [Validators.minLength(5), Validators.maxLength(50), Validators.required]),
      customerType: new FormControl('', [Validators.required]),
      gender: new FormControl(),
      dateOfBirth: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern('[0-9]{9}')]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('(((\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})')]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required])
    });
    this.customerService.getAllCustomerType().subscribe(data => {
        this.customerType = data;
      }
    );
  }

  ngOnInit(): void {
  }

  saveCustomer() {
    const customer = this.creatForm.value;
    console.log(customer);
    this.customerService.saveCustomer(customer).subscribe(data => {
      this.creatForm.reset();
      alert('Thêm mới thành công!');
      this.route.navigateByUrl('customer');
    }, error => {
      console.log(error);
    });
  }
}
