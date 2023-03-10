import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ProduceService} from '../../service/produce.service';
import {Category} from '../../model/category';
import {Product} from '../../model/product';
import {Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {error} from '@angular/compiler/src/util';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  category: Category[] = [];

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    category: new FormControl()
  });

  constructor(private  produceService: ProduceService,
              private categoryService: CategoryService,
              private  route: Router) {
    this.categoryService.getAll().subscribe(data => {
      this.category = data;
    });
  }

  ngOnInit(): void {
  }

  saveProduct() {
    const product = this.productForm.value;
    this.produceService.saveProduce(product).subscribe(() => {
      this.productForm.reset();
      alert('Thêm mới thành công!');
      this.route.navigateByUrl('product/list');
    }, error => {
      console.log(error);
    });
  }
}
