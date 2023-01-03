import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from './customer';
import {HttpClient} from '@angular/common/http';
import {CustomerType} from './customer-type';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  CUSTOMER_URL = 'http://localhost:3000/customer';
  CUSTOMER_TYPE_URL = 'http://localhost:3000/customer-type';

  constructor(private httpClient: HttpClient) {
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.CUSTOMER_URL);
  }

  getAllCustomerType(): Observable<CustomerType[]> {
    return this.httpClient.get<CustomerType[]>(this.CUSTOMER_TYPE_URL);
  }

  saveCustomer(customer: Customer) {
    return this.httpClient.post<Customer>(this.CUSTOMER_URL, customer);
  }

  deleteById(id: number) {
    return this.httpClient.delete(this.CUSTOMER_URL + '/' + id);
  }

  findById(id: number){
    return this.httpClient.get(this.CUSTOMER_URL+'/'+id)
  }

  editCustomer(customer: Customer) {
    return this.httpClient.patch(this.CUSTOMER_URL + '/' + customer.id, customer);
  }
}
