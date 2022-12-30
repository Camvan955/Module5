import {Component, OnInit} from '@angular/core';
import {ProduceService} from '../../service/produce.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  temp: Product = {};
  products: Product[] = [];

  constructor(private produceService: ProduceService) {

  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.products = this.produceService.getAll();
  }

  editProduct() {

  }
}
