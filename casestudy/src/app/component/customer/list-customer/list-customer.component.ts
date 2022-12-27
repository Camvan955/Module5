import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';


@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers: Customer[] = [
    {
      id: 1,
      customerType: {id: 1, name: "Diamond"},
      name: 'Nguyễn Thị Cẩm Vân',
      dateOfBirth: "08/01/1999",
      idCard: "0921323123",
      phoneNumber: "0389233955",
      email: "nguyenvan95@gmail.com",
      address:"Tứ Hạ, Hương Trà, Thừa Thiên Huế"
    },
    {
      id: 2,
      customerType: {id: 2, name: "Member"},
      name: 'Lê Đức Anh',
      dateOfBirth: "01/01/1999",
      idCard: "34313764442",
      phoneNumber: "0975991903",
      email: "ducanhkatori@gmail.com",
      address:"Hương Văn, Hương Trà, Thừa Thiên Huế"
    },
    {
      id: 2,
      customerType: {id: 3, name: "Gold"},
      name: 'Lê Bảo Khánh',
      dateOfBirth: "27/07/2000",
      idCard: "0242498655",
      phoneNumber: "0912334313",
      email: "khanhcute123@gmail.com",
      address:"12 Lê Đại Hành, Đà Nẵng"
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
