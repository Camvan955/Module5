import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {NavigationComponent} from './navigation/navigation.component';
import {FooterComponent} from './footer/footer.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {ListContractComponent} from './contract/list-contract/list-contract.component';
import {EditCustomerComponent} from './customer/edit-customer/edit-customer.component';
import {CreateFacilityComponent} from './facility/create-facility/create-facility.component';
import {EditFacilityComponent} from './facility/edit-facility/edit-facility.component';
import {ListFacilityComponent} from './facility/list-facility/list-facility.component';
import {CreateCustomerComponent} from './customer/create-customer/create-customer.component';
import {ListCustomerComponent} from './customer/list-customer/list-customer.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {DeleteCustomerComponent} from './customer/delete-customer/delete-customer.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    CreateContractComponent,
    ListContractComponent,
    EditCustomerComponent,
    CreateFacilityComponent,
    EditFacilityComponent,
    ListFacilityComponent,
    CreateCustomerComponent,
    ListCustomerComponent,
    DeleteCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
