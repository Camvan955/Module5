import {Sanpham} from './sanpham';

export interface Lohang {
  id?: number;
  ma?: string;
  soLuong?: number;
  ngayNhap?: string;
  ngaySanxuat?:string;
  ngayHetHan?:string;
  sanPham?: Sanpham;
}
