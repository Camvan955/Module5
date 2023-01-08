import {Component, OnInit} from '@angular/core';
import {LoHangService} from '../lo-hang.service';
import {Lohang} from '../lohang';
import {Sanpham} from '../sanpham';

@Component({
  selector: 'app-danh-sach-lo-hang',
  templateUrl: './danh-sach-lo-hang.component.html',
  styleUrls: ['./danh-sach-lo-hang.component.css']
})
export class DanhSachLoHangComponent implements OnInit {
  loHangs: Lohang[] = [{id: 0}];
  sanPham: Sanpham[] = [];
  p = 1;
  temp: Lohang = {id: 0};
  tenSanPham = '';
  ngayHetHan = '';


  constructor(private loHangService: LoHangService) {
    this.loHangService.getAllLoHang(this.tenSanPham, this.ngayHetHan).subscribe(data => {
      this.loHangs = data.content;
      console.log(this.loHangs);
      // console.log(data);
    }, error => {
    }, () => {
    });
  }

  ngOnInit(): void {
  }

  getAll(tenSanPham: string, ngayHetHan: string) {
    this.loHangService.getAllLoHang(tenSanPham, ngayHetHan).subscribe(data => {
      this.loHangs = data;
      console.log(data);
    });
  }

  reload() {
    this.getAll(this.tenSanPham, this.ngayHetHan);
  }

  search(tenSanPham: string, ngayHetHan: string) {
    this.getAll(tenSanPham, ngayHetHan);
  }
}
