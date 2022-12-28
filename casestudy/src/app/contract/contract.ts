import {Employee} from '../employee/employee';
import {Customer} from '../customer/customer';
import {Facitily} from '../facility/facitily';

export interface Contract {
  id?: number;
  idEmployee: Employee;
  idCustomer: Customer;
  idFacility: Facitily;
  dateStart?: string;
  dateEnd?: string;
  deposit?: number;
  totalPay?: number;
}
