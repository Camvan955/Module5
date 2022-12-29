import {Component, Input, OnInit} from '@angular/core';
import {ProduceService} from '../../service/produce.service';
import {Route} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  @Input()
  product: Product = {};

  constructor(private produceService: ProduceService) {
  }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.produceService.deleteById(this.product.id);
    document.getElementById('exampleModal')?.click();
  }
}
