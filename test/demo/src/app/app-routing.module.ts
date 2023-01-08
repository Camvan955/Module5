import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DanhSachLoHangComponent} from './danh-sach-lo-hang/danh-sach-lo-hang.component';
import {ThemMoiComponent} from './them-moi/them-moi.component';
import {XoaComponent} from './xoa/xoa.component';
import {SuaLoHangComponent} from './sua-lo-hang/sua-lo-hang.component';

const routes: Routes = [
  {
    path: '',
    component: DanhSachLoHangComponent
  },
  {
    path: 'them-moi',
    component: ThemMoiComponent
  },
  {
    path: 'xoa',
    component: XoaComponent
  },
  {
    path: 'sua/:id',
    component: SuaLoHangComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
