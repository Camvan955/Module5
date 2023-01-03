import {CustomerType} from './customer-type';

export interface Customer {
  id?: number;
  code?:string;
  customerType?: CustomerType;
  name?: string;
  dateOfBirth?: string;
  idCard?: string;
  phoneNumber?: string;
  email?: string;
  address?: string;
  gender?: boolean;
}
