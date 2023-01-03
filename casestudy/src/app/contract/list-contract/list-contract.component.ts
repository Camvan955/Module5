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

  contracts: Contract[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
