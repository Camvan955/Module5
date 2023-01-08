import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoHangService} from '../lo-hang.service';
import {Lohang} from '../lohang';

;

@Component({
  selector: 'app-xoa',
  templateUrl: './xoa.component.html',
  styleUrls: ['./xoa.component.css']
})
export class XoaComponent implements OnInit {

  @Input()
  loHang: Lohang = {};

  @Output()
  emiter = new EventEmitter();

  constructor(private loHangService: LoHangService) {
  }

  ngOnInit(): void {
  }

  deleteLoHang() {
    this.loHangService.deleteById(this.loHang.id).subscribe(_data => {
      this.emiter.emit('hi');
    });
    document.getElementById('deleteLoHang')?.click();
  }

}
