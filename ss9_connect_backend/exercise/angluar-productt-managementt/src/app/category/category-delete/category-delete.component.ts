import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategoryService} from '../../service/category.service';
import {Category} from '../../model/category';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  @Output()
  emiter = new EventEmitter();

  constructor(private categoryService: CategoryService) {
  }

  @Input()
  category: Category = {id: 0, name: ''};

  ngOnInit(): void {
  }

  deleteCategory() {
    this.categoryService.deleteById(this.category.id).subscribe(data => {
      this.emiter.emit('hi');
    });
    document.getElementById('deleteId')?.click;
  }
}
