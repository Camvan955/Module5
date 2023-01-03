import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from '../model/category';
import {Product} from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  CATEGORY_URL = 'http://localhost:3000/category';

  constructor(private httpClient: HttpClient) {
    this.getAll();
  }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.CATEGORY_URL);
  }

  saveCategory(category: Category) {
    // @ts-ignore
    return this.httpClient.post<Category>(this.CATEGORY_URL, category);
  }


  updateCategory(id: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(this.CATEGORY_URL + '/' + id, category);
  }

  deleteById(id: number | undefined) {
    return this.httpClient.delete(this.CATEGORY_URL + '/' + id);
  }

  findById(id: number):Observable<Category> {
    return this.httpClient.get<Category>(this.CATEGORY_URL+'/'+id);
  }
}
