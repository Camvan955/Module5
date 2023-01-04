import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DanhSachPhongComponent} from './danh-sach-phong/danh-sach-phong.component';
import {ThemPhongComponent} from './them-phong/them-phong.component';
import {XoaPhongTroComponent} from './xoa-phong-tro/xoa-phong-tro.component';
import {SuaPhongTroComponent} from './sua-phong-tro/sua-phong-tro.component';

const routes: Routes = [
  {
    path: '',
    component: DanhSachPhongComponent
  },
  {
    path: 'them-phong',
    component: ThemPhongComponent
  },
  {
    path: 'xoa/:id',
    component: XoaPhongTroComponent
  },
  {
    path: 'sua/:id',
    component: SuaPhongTroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
