import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-contract',
  templateUrl: './create-contract.component.html',
  styleUrls: ['./create-contract.component.css']
})
export class CreateContractComponent implements OnInit {
  formContractCreate: FormGroup;

  constructor() {
    this.formContractCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern('HĐ-[0-9]{4}')]),
      dateStart: new FormControl('', [Validators.required]),
      dateEnd: new FormControl('', [Validators.required]),
      deposit: new FormControl('', [Validators.required]),
      totalPay: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  saveContract(){
    console.log(this.formContractCreate.value);
  }
}
