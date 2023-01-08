import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Contract} from './contract';
import {Facitily} from '../facility/facitily';
import {Customer} from '../customer/customer';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

CONTRACT_URL = 'http://localhost:3000/contract';
FACILITY_URL = 'http://localhost:3000/facility';
CUSTOMER_URL = 'http://localhost:3000/customer';

  constructor(private httpClient: HttpClient) {
  }

  getAllContract(): Observable<Contract[]> {
    return this.httpClient.get<Contract[]>(this.CONTRACT_URL);
  }

  // getAllFacility(): Observable<Facitily[]>{
  //   return this.httpClient.get<Facitily[]>(this.FACILITY_URL);
  // }

  saveContract(contract: Contract) {
    return this.httpClient.post<Contract>(this.CONTRACT_URL, contract);
  }
}
