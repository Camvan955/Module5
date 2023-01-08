import {Employee} from '../employee/employee';
import {Customer} from '../customer/customer';
import {Facitily} from '../facility/facitily';

export interface Contract {
  id: number;
  code?: string;
  employee: Employee;
  customer: Customer;
  facility: Facitily;
  dateStart?: string;
  dateEnd?: string;
  deposit?: number;
  totalPay?: number;
}
