import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Phongtro} from './phongtro';
import {Loaithue} from './loaithue';

@Injectable({
  providedIn: 'root'
})
export class PhongTroService {

  PHONG_TRO_URL = 'http://localhost:3000/phongtro';
  LOAI_THUE_URL = 'http://localhost:3000/loaiThue';

  constructor(private httpClient: HttpClient) {
  }

  getAllPhongTro(nguoiThue: string, soDienThoai: string): Observable<Phongtro[]> {
    return this.httpClient.get<Phongtro[]>('http://localhost:3000/phongtro?nguoiThue_like='+nguoiThue+'&soDienThoai_like='+soDienThoai);
  }

  getAllLoaiThue(): Observable<Loaithue[]> {
    return this.httpClient.get<Loaithue[]>(this.LOAI_THUE_URL);
  }

  // tslint:disable-next-line:typedef
  save(phongTro: Phongtro) {
    return this.httpClient.post<Phongtro>(this.PHONG_TRO_URL, phongTro);
  }

  deleteById(id: number): Observable<Phongtro> {
    return this.httpClient.delete<Phongtro>(this.PHONG_TRO_URL + '/' + id);
  }

  findById(id: number): Observable<Phongtro> {
    return this.httpClient.get<Phongtro>(this.PHONG_TRO_URL + '/' + id);
  }

  // tslint:disable-next-line:typedef
  editPhongTro(phongtro: Phongtro) {
    return this.httpClient.patch(this.PHONG_TRO_URL + '/' + phongtro.id, phongtro);
  }
}
