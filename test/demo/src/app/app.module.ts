import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { DanhSachLoHangComponent } from './danh-sach-lo-hang/danh-sach-lo-hang.component';
import { ThemMoiComponent } from './them-moi/them-moi.component';
import { XoaComponent } from './xoa/xoa.component';
import { SuaLoHangComponent } from './sua-lo-hang/sua-lo-hang.component';

@NgModule({
  declarations: [
    AppComponent,
    DanhSachLoHangComponent,
    ThemMoiComponent,
    XoaComponent,
    SuaLoHangComponent
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
