import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProduceService} from '../../service/produce.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(private  produceService: ProduceService) {
  }

  ngOnInit(): void {
  }

  submit() {
    // const product = this.productForm.value;
    // this.produceService.saveProduce(product);
    // this.productForm.reset();
  }
}