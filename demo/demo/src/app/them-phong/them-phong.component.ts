import {Component, OnInit} from '@angular/core';
import {PhongTroService} from '../phongTro.service';
import {Router} from '@angular/router';
import {Phongtro} from '../phongtro';
import {Loaithue} from '../loaithue';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-them-phong',
  templateUrl: './them-phong.component.html',
  styleUrls: ['./them-phong.component.css']
})
export class ThemPhongComponent implements OnInit {

  phongTros: Phongtro[] = [];
  loaiThues: Loaithue[] = [];
  createForm: FormGroup;

  constructor(private phongTroService: PhongTroService,
              private route: Router) {
    this.createForm = new FormGroup({
      code: new FormControl('', [Validators.required]),
      nguoiThue: new FormControl('', [Validators.required]),
      soDienThoai: new FormControl('', [Validators.required]),
      ngayThue: new FormControl('', [Validators.required]),
      loaiThue: new FormControl('', [Validators.required]),
      gia: new FormControl('', [Validators.required]),
    });
    this.phongTroService.getAllLoaiThue().subscribe(data => {
      this.loaiThues = data;
    });
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  savePhongTro() {
    const phongtro = this.createForm.value;
    this.phongTroService.save(phongtro).subscribe(data => {
      this.createForm.reset();
      alert('Thêm mới thành công!');
      this.route.navigateByUrl('');
    }, error => {
    });
  }
}
