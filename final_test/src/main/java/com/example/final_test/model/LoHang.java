package com.example.final_test.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
public class LoHang {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String ma;
    private int soLuong;
    @Column(columnDefinition = "date")
    private String ngayNhap;
    @Column(columnDefinition = "date")
    private  String ngaySanxuat;
    @Column(columnDefinition = "date")
    private String ngayHetHan;

    @ManyToOne()
    @JsonBackReference
    private SanPham sanPham;

    public SanPham getSanPham() {
        return sanPham;
    }

    public void setSanPham(SanPham sanPham) {
        this.sanPham = sanPham;
    }


    public LoHang() {
    }

    public LoHang(int id, String ma, int soLuong, String ngayNhap, String ngaySanxuat, String ngayHetHan, SanPham sanPham) {
        this.id = id;
        this.ma = ma;
        this.soLuong = soLuong;
        this.ngayNhap = ngayNhap;
        this.ngaySanxuat = ngaySanxuat;
        this.ngayHetHan = ngayHetHan;
        this.sanPham = sanPham;
    }

    public LoHang(String ma, int soLuong, String ngayNhap, String ngaySanxuat, String ngayHetHan, SanPham sanPham) {
        this.ma = ma;
        this.soLuong = soLuong;
        this.ngayNhap = ngayNhap;
        this.ngaySanxuat = ngaySanxuat;
        this.ngayHetHan = ngayHetHan;
        this.sanPham = sanPham;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMa() {
        return ma;
    }

    public void setMa(String ma) {
        this.ma = ma;
    }

    public int getSoLuong() {
        return soLuong;
    }

    public void setSoLuong(int soLuong) {
        this.soLuong = soLuong;
    }

    public String getNgayNhap() {
        return ngayNhap;
    }

    public void setNgayNhap(String ngayNhap) {
        this.ngayNhap = ngayNhap;
    }

    public String getNgaySanxuat() {
        return ngaySanxuat;
    }

    public void setNgaySanxuat(String ngaySanXuat) {
        this.ngaySanxuat = ngaySanxuat;
    }

    public String getNgayHetHan() {
        return ngayHetHan;
    }

    public void setNgayHetHan(String ngayHetHan) {
        this.ngayHetHan = ngayHetHan;
    }

}
