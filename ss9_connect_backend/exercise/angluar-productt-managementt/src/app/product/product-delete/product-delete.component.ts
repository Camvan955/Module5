import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProduceService} from '../../service/produce.service';
import {Route} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  @Output()
  emiter = new EventEmitter();
  @Input()
  product: Product = {category: {id: 0, name: ''}};

  constructor(private produceService: ProduceService) {
  }

  ngOnInit(): void {
  }

  deleteProduct() {
    this.produceService.deleteById(this.product.id).subscribe(date=>{
      this.emiter.emit("hello")
    });
    document.getElementById('exampleModal')?.click();
  }
}
