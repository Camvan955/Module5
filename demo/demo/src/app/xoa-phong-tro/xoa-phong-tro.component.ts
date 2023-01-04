import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PhongTroService} from '../phongTro.service';
import {Phongtro} from '../phongtro';

@Component({
  selector: 'app-xoa-phong-tro',
  templateUrl: './xoa-phong-tro.component.html',
  styleUrls: ['./xoa-phong-tro.component.css']
})
export class XoaPhongTroComponent implements OnInit {
  @Input()
  phongTro: Phongtro = {id: 0, loaiThue: {id: 0, ten: ''}};

  @Output()
  emiter = new EventEmitter();

  constructor(private phongTroService: PhongTroService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  deletePhongTro() {
    this.phongTroService.deleteById(this.phongTro.id).subscribe(data => {
      this.emiter.emit('hi');
    });
    // @ts-ignore
    document.getElementById('deletePhongTro')?.click();
  }


}
