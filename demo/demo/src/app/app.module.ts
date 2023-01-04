import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DanhSachPhongComponent} from './danh-sach-phong/danh-sach-phong.component';
import {ThemPhongComponent} from './them-phong/them-phong.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { XoaPhongTroComponent } from './xoa-phong-tro/xoa-phong-tro.component';
import { SuaPhongTroComponent } from './sua-phong-tro/sua-phong-tro.component';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    DanhSachPhongComponent,
    ThemPhongComponent,
    AppComponent,
    XoaPhongTroComponent,
    SuaPhongTroComponent
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
