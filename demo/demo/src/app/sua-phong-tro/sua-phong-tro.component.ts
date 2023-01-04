import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Phongtro} from '../phongtro';
import {Loaithue} from '../loaithue';
import {FormControl, FormGroup} from '@angular/forms';
import {PhongTroService} from '../phongTro.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-sua-phong-tro',
  templateUrl: './sua-phong-tro.component.html',
  styleUrls: ['./sua-phong-tro.component.css']
})
export class SuaPhongTroComponent implements OnInit {

  phongTros: Phongtro[] = [];
  loaiThue: Loaithue[] = [];
  editForm: FormGroup;

  compareWith(object1: Phongtro, object2: Phongtro): boolean {

    console.log('1', object1);
    console.log('2', object2);
    return object1.id === object2.id;
  }
  constructor(private phongTroService: PhongTroService,
              private route: Router,
              private activatedRoute: ActivatedRoute) {
    this.editForm = new FormGroup({
      id: new FormControl(),
      code: new FormControl(),
      nguoiThue: new FormControl(),
      soDienThoai: new FormControl(),
      ngayThue: new FormControl(),
      loaiThue: new FormControl(),
      gia: new FormControl()
    });
    this.phongTroService.getAllLoaiThue().subscribe(data =>{
      this.loaiThue = data;
    }
    );
    this.activatedRoute.paramMap.subscribe(data => {
      const id = data.get('id');
      if (id != null) {
        this.getPhongTro(+id);
      }
    });
  }

  ngOnInit(): void {
  }

  getPhongTro(id: number){
    this.phongTroService.findById(id).subscribe(data => {
      console.log(data);
      this.editForm.patchValue(data);
    })
  }

  editPhongTro() {
    const phongTroSua= this.editForm.value;
    this.phongTroService.editPhongTro(phongTroSua).subscribe( data => {
      alert('Sửa thành công!')
      this.route.navigateByUrl('');
    });
  }
}
