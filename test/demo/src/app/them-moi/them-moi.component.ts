import {Component, OnInit} from '@angular/core';
import {Lohang} from '../lohang';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoHangService} from '../lo-hang.service';
import {Router} from '@angular/router';
import {Sanpham} from '../sanpham';

@Component({
  selector: 'app-them-moi',
  templateUrl: './them-moi.component.html',
  styleUrls: ['./them-moi.component.css']
})
export class ThemMoiComponent implements OnInit {
  sanPhams: Sanpham[]=[];
  loHangs: Lohang[] = [];
  createForm: FormGroup;

  constructor(private loHangService: LoHangService,
              private router: Router) {
    this.createForm = new FormGroup({
      ma: new FormControl('', [Validators.required,Validators.pattern('LH-[0-9]{4}')]),
      soLuong: new FormControl('', [Validators.min(0), Validators.required]),
      ngayNhap: new FormControl('', [Validators.required]),
      ngaySanxuat: new FormControl('', [Validators.required]),
      ngayHetHan: new FormControl('', [Validators.required]),
      sanPham: new FormControl('', [Validators.required]),
    });
    this.loHangService.getAllSanPham().subscribe(data => {
      this.sanPhams = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

  saveLoHang() {
    const loHang = this.createForm.value;
    this.loHangService.save(loHang).subscribe(data => {
      this.createForm.reset();
      alert('Thêm mới thành công!');
      this.router.navigateByUrl('');
    }, error => {
    });
  }
}
