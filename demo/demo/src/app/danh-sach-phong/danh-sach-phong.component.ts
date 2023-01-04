import {Component, OnInit} from '@angular/core';
import {Phongtro} from '../phongtro';
import {PhongTroService} from '../phongTro.service';

@Component({
  selector: 'app-danh-sach-phong',
  templateUrl: './danh-sach-phong.component.html',
  styleUrls: ['./danh-sach-phong.component.css']
})
export class DanhSachPhongComponent implements OnInit {

  p = 1;
  phongTros: Phongtro[] = [{id: 0, loaiThue: {id: 0, ten: ''}}];
  temp: Phongtro = {id: 0, loaiThue: {id: 0, ten: ''}};
  nguoiThue: string = '';
  soDienThoai: string = '';

  constructor(private phongTroService: PhongTroService) {
    this.phongTroService.getAllPhongTro(this.nguoiThue, this.soDienThoai).subscribe(data => {
      this.phongTros = data;
      console.log(data);
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  getAll(nguoiThue: string, soDienthoai: string) {
    this.phongTroService.getAllPhongTro(nguoiThue, soDienthoai).subscribe(data => {
      this.phongTros = data;
    });
  }

  reload() {
    this.getAll(this.nguoiThue, this.soDienThoai);
  }

  search(nguoiThue: string, soDienThoai: string) {
    this.getAll(nguoiThue, soDienThoai);
  }
}
