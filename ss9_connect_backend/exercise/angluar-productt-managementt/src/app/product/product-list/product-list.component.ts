import {Component, OnInit} from '@angular/core';
import {ProduceService} from '../../service/produce.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  temp: Product = {category: {id: 0, name: ''}};
  products: Product[] = [];

  constructor(private produceService: ProduceService) {
    this.produceService.getAll().subscribe(data => {
      this.products = data;
    }, error => {
    }, () => {
    });

  }

  ngOnInit(): void {

  }

  editProduct() {
  }

  reload() {
    this.produceService.getAll().subscribe(data => {
      console.log(data);
      this.products = data;
    }, error => {
    }, () => {
    });
  }
}
