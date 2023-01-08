import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Lohang} from './lohang';
import {Sanpham} from './sanpham';

@Injectable({
  providedIn: 'root'
})
export class LoHangService {

  LO_HANG_URL = 'http://localhost:8080/lo-hangs';
  SAN_PHAM_URL = 'http://localhost:3000/sanPham';

  constructor(private httpClient: HttpClient) {
  }

  getAllLoHang(tenSanPham: string, ngayHetHan: string): Observable<any> {
    console.log(ngayHetHan);
    return this.httpClient.get<Lohang[]>('http://localhost:8080/lo-hangs?tenSanPham.ten_like=' + tenSanPham + '&ngayHetHan_like=' + ngayHetHan);
  }

  getAllSanPham(): Observable<Sanpham[]> {
    return this.httpClient.get<Sanpham[]>(this.SAN_PHAM_URL);
  }

  save(loHang: Lohang) {
    return this.httpClient.post<Lohang>(this.LO_HANG_URL, loHang);
  }

  deleteById(id: number | undefined): Observable<Lohang> {
    return this.httpClient.delete<Lohang>(this.LO_HANG_URL + '/' + id);
  }

  findById(id: number) {
    return this.httpClient.get(this.LO_HANG_URL + '/' + id);
  }

  editLoHang(loHang: Lohang) {
    return this.httpClient.patch(this.LO_HANG_URL + '/' + loHang.id, loHang);
  }
}
