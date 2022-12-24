import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/layout/header/header.component';
import { NavigationComponent } from './component/layout/navigation/navigation.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { ListComponent } from './component/facility/list/list.component';
import { EditComponent } from './component/facility/edit/edit.component';
import { CreateComponent } from './component/facility/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    ListComponent,
    EditComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
