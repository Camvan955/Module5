import {CustomerType} from './customer-type';

export interface Customer {
  id: string;
  customerType: CustomerType;
  name?: string;
  dateOfBirth?: string;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
}
