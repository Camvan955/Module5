import { Component, OnInit } from '@angular/core';
import {Calculator} from '../../model/calculator';

@Component({
  selector: 'app-may-tinh',
  templateUrl: './may-tinh.component.html',
  styleUrls: ['./may-tinh.component.css']
})
export class MayTinhComponent implements OnInit {
  temp: Calculator = {number1: 0, number2: 0, result: 0};

  constructor() {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  changeCalculator(target: any) {
    switch (target) {
      case '+':
        // @ts-ignore
        this.temp.result = +this.temp.number1 + +this.temp.number2;
        break;
      case '-':
        // @ts-ignore
        this.temp.result = this.temp.number1 - this.temp.number2;
        break;
      case '*':
        // @ts-ignore
        this.temp.result = this.temp.number1 * this.temp.number2;
        break;
      case '/':
        // @ts-ignore
        this.temp.result = this.temp.number1 / this.temp.number2;
        break;
    }
  }

}
