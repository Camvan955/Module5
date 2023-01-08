import {Component, OnInit} from '@angular/core';
import {Contract} from '../contract';
import {ContractService} from '../contract.service';

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {
  p = 1;
  contracts: Contract[] = [];

  constructor(private contractService: ContractService) {
    this.contractService.getAllContract().subscribe(data => {
      this.contracts = data;
      console.log(data)
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  getAll() {
    this.contractService.getAllContract().subscribe(data => {
      this.contracts = data;
    });
  }


}
