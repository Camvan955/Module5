import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {
  customerTypeList = [
    {id: 1, name:"Diamond"},
    {id: 2, name:"Platinum"},
    {id: 3, name:"Gold"},
    {id: 4, name:"Silver"},
    {id: 5, name:"Member"},
  ]


creatForm : FormGroup;
  constructor() {
    this.creatForm= new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('KH-[0-9]{4}')]),
      name: new FormControl('',[Validators.required,Validators.pattern("([A-Z][a-z]+[ ])+([A-Z][a-z]+)")]),
      customerType: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      idCard: new FormControl('',[Validators.required,Validators.pattern("[0-9]{9}")]),
      phoneNumber: new FormControl('',[Validators.required,Validators.pattern("(((\\+|)84)|0)(3|5|7|8|9)+([0-9]{8})")]),
      email: new FormControl('', [Validators.required,Validators.email]),
      address: new FormControl('', [Validators.required])
    })
  }

  ngOnInit(): void {
  }

  saveCustomer(){
    console.log(this.creatForm.value);
  }
}
