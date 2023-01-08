import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../contract.service';
import {Contract} from '../contract';
import {Facitily} from '../../facility/facitily';
import {Customer} from '../../customer/customer';
import {Employee} from '../../employee/employee';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {

  contract: Contract[] = [];
  facility: Facitily[] = [];
  customer: Customer[] = [];
  formContractCreate: FormGroup;

  constructor(private contractService: ContractService,
              private router: Router) {
    this.formContractCreate = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern('HĐ-[0-9]{4}')]),
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required]),
      totalPay: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  saveContract() {
    console.log(this.formContractCreate.value);
  }
}
