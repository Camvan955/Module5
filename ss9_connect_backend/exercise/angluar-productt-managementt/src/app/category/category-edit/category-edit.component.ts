import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {CategoryService} from '../../service/category.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  // @ts-ignore
  categoryForm: FormGroup ;
  // @ts-ignore
  id: number;

  constructor(private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      // @ts-ignore
      const category = this.getCategory(this.id);
      this.categoryForm = new FormGroup({
        id: new FormControl(),
        name: new FormControl(),
      });
    });
  }
  ngOnInit(): void {
  }

  getCategory(id: number) {
    return this.categoryService.findById(id);
  }

  updateCategory(id: number) {
    // @ts-ignore
    const category = this.categoryForm.value;
    this.categoryService.updateCategory(id, category);
    alert('Cập nhật thành công');
  }


}
