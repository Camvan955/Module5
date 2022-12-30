import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProduceService} from '../../service/produce.service';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  product: Product = {};
  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  constructor(private activatedRoute: ActivatedRoute,
              private produceService: ProduceService) {
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');

      if (id != null) {
        // @ts-ignore
        this.product = this.produceService.findById(parseInt(id));
        console.log(this.product)
      }
    }, () => {

    });
  }

  ngOnInit(): void {
  }

  updateProduct() {
    this.product = this.productForm.value;
    this.produceService.updateById(this.product);
    this.productForm.reset();
    alert("Chỉnh sửa thành công!")
  }
}
