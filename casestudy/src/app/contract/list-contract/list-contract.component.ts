import {Component, OnInit} from '@angular/core';
import {Contract} from '../contract';
import {Employee} from '../../employee/employee';
import {Customer} from '../../customer/customer';
import {Facitily} from '../../facility/facitily';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contracts: Contract[] = [
    {
      id: 1,
      idEmployee: {id: 1, name: 'Phan Thùy Nhung'},
      idCustomer: {id: "KH-0001", name: 'Lê Mỹ Uyên', customerType:{id: 1}},
      idFacility: {id: 1, name: 'Room Luxury'},
      dateStart: '12/12/2022',
      dateEnd: '13/12/2022',
      deposit: 2000000,
      totalPay:5000000
    },
    {
      id: 1,
      idEmployee: {id: 1, name: 'Nguyễn Tư Quang'},
      idCustomer: {id: "KH-0002", name: 'Lê Thanh Thúy', customerType:{id: 2}},
      idFacility: {id: 1, name: 'Villa Luxury'},
      dateStart: '12/12/2022',
      dateEnd: '13/12/2022',
      deposit: 2000000,
      totalPay:5000000
    },
    {
      id: 1,
      idEmployee: {id: 1, name: 'Nguyễn Như Quỳnh'},
      idCustomer: {id: "KH-0003", name: 'Trần Hoàng Đạt', customerType:{id: 3}},
      idFacility: {id: 1, name: 'Room Luxury'},
      dateStart: '12/12/2022',
      dateEnd: '13/12/2022',
      deposit: 2000000,
      totalPay:5000000
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
