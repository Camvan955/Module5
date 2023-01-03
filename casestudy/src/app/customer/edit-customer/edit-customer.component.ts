import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../customer';
import {CustomerType} from '../customer-type';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {
  customer: Customer[] = [];
  customerType: CustomerType[] = [];
  editForm: FormGroup;

  compareWith(object1: Customer, object2: Customer): boolean {

    console.log('1', object1);
    console.log('2', object2);
    return object1.id === object2.id;
  }

  constructor(private customerService: CustomerService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
    this.editForm = new FormGroup({
      id: new FormControl(),
      code: new FormControl('', [Validators.required, Validators.pattern('KH-[0-9]{4}')]),
      name: new FormControl('', [Validators.minLength(5), Validators.maxLength(50), Validators.required]),
      customerType: new FormControl('', [Validators.required]),
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

    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.getCustomer(+id);
      }
    });
  }

  ngOnInit(): void {
  }

  getCustomer(id: number) {
    this.customerService.findById(id).subscribe(data => {
      this.editForm.patchValue(data);
    });
  }

  editCustomer() {

    const customerEdit = this.editForm.value;
    console.log(this.editForm);
    this.customerService.editCustomer(customerEdit).subscribe(data => {
      this.route.navigateByUrl('customer');
    });
  }
}
