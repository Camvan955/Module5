import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {CreateFacilityComponent} from './facility/create-facility/create-facility.component';
import {EditFacilityComponent} from './facility/edit-facility/edit-facility.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {DeleteCustomerComponent} from './customer/delete-customer/delete-customer.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'facility',
    component: ListFacilityComponent
  },
  {
    path: 'facility/create',
    component: CreateFacilityComponent
  },
  {
    path: 'facility/edit/:id',
    component: EditFacilityComponent
  },
  {
    path: 'customer',
    component: ListCustomerComponent
  },
  {
    path: 'customer/create',
    component: CreateCustomerComponent
  },
  {
    path: 'customer/edit/:id',
    component: EditCustomerComponent
  },
  {
    path: 'customer/delete/:id',
    component: DeleteCustomerComponent
  },
  {
    path: 'contract',
    component: ListContractComponent
  },
  {
    path: 'contract',
    component: CreateContractComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
