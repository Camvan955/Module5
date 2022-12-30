import {EventEmitter, Injectable, Output} from '@angular/core';
import {Product} from '../model/product';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduceService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>('http://localhost:3000/product');
  }

  // saveProduce(product: Product) {
  //   this.products.push(product);
  // }
  //
  // updateById(product:Product){
  //   let length = this.products.length;
  //   for (let i = 0; i < length; i++) {
  //     if (this.products[i].id == product.id){
  //       this.products[i] = product;
  //       break;
  //     }
  //   }
  // }
  //
  // findById(number: number): Product | null {
  //   const temp = this.products.filter(element => element.id === number);
  //   if (temp.length === 0) {
  //     return null;
  //   }
  //   return temp[0];
  // }
  //
  deleteById(id: number | undefined) {
    return this.httpClient.delete('http://localhost:3000/product/' + id);
  }
}
