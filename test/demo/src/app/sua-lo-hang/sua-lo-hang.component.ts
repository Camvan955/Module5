import {Component, OnInit} from '@angular/core';
import {Lohang} from '../lohang';
import {Sanpham} from '../sanpham';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoHangService} from '../lo-hang.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sua-lo-hang',
  templateUrl: './sua-lo-hang.component.html',
  styleUrls: ['./sua-lo-hang.component.css']
})
export class SuaLoHangComponent implements OnInit {
  // loHang: Lohang[] = [];
  sanPhams: Sanpham[] = [];
  editForm: FormGroup;

  compareWith(object1: Lohang, object2: Lohang): boolean {

    console.log('1', object1);
    console.log('2', object2);
    return object1.id === object2.id;
  }

  constructor(private loHangService: LoHangService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.editForm = new FormGroup({
      id: new FormControl(),
      ma: new FormControl('', [Validators.required, Validators.pattern('LH-[0-9]{4}')]),
      soLuong: new FormControl('', [Validators.min(0), Validators.required]),
      ngayNhap: new FormControl('', [Validators.required]),
      ngaySanxuat: new FormControl('', [Validators.required]),
      ngayHetHan: new FormControl('', [Validators.required]),
      sanPham: new FormControl('', [Validators.required]),
    });
    this.loHangService.getAllSanPham().subscribe(data => {
      this.sanPhams = data;
    }
    );
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.getLoHang(+id);
      }
    });
  }

  ngOnInit(): void {
  }

  getLoHang(id: number) {
    this.loHangService.findById(id).subscribe(data => {
      this.editForm.patchValue(data);
    });
  }

  editLoHang(){
    const loHangEdit = this.editForm.value;
    console.log(this.editForm);
    this.loHangService.editLoHang(loHangEdit).subscribe(data =>{
      this.router.navigateByUrl('');
      alert('Cập nhật thành công')
    });
  }
}
