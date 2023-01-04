import {Loaithue} from './loaithue';

export interface Phongtro {
  id: number;
  code?: string;
  nguoiThue?: string;
  soDienThoai?: string;
  ngayThue?: string;
  loaiThue: Loaithue;
  gia?: number;
}
