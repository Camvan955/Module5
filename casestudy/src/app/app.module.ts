import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { NavigationComponent } from './component/layout/navigation/navigation.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { CreateContractComponent } from './component/contract/create-contract/create-contract.component';
import { ListContractComponent } from './component/contract/list-contract/list-contract.component';
import { EditCustomerComponent } from './component/customer/edit-customer/edit-customer.component';
import { CreateFacilityComponent } from './component/facility/create-facility/create-facility.component';
import { EditFacilityComponent } from './component/facility/edit-facility/edit-facility.component';
import { ListFacilityComponent } from './component/facility/list-facility/list-facility.component';
import { CreateCustomerComponent } from './component/customer/create-customer/create-customer.component';
import { ListCustomerComponent } from './component/customer/list-customer/list-customer.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
