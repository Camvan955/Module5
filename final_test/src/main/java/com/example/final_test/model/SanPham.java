package com.example.final_test.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
public class SanPham {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idSp;
    private String ten;
    private int gia;
    private String donVi;

    @OneToMany(mappedBy = "sanPham")
    @JsonBackReference
    private Set<LoHang> loHangs;

    public SanPham() {
    }

    public SanPham(int idSp, String ten, int gia, String donVi) {
        this.idSp = idSp;
        this.ten = ten;
        this.gia = gia;
        this.donVi = donVi;
    }

    public SanPham(int idSp, String ten, int gia, String donVi, Set<LoHang> loHangs) {
        this.idSp = idSp;
        this.ten = ten;
        this.gia = gia;
        this.donVi = donVi;
        this.loHangs = loHangs;
    }

    public int getIdSp() {
        return idSp;
    }

    public void setIdSp(int idSp) {
        this.idSp = idSp;
    }

    public String getTen() {
        return ten;
    }

    public void setTen(String ten) {
        this.ten = ten;
    }

    public int getGia() {
        return gia;
    }

    public void setGia(int gia) {
        this.gia = gia;
    }

    public String getDonVi() {
        return donVi;
    }

    public void setDonVi(String donVi) {
        this.donVi = donVi;
    }

    public Set<LoHang> getLoHangs() {
        return loHangs;
    }

    public void setLoHangs(Set<LoHang> loHangs) {
        this.loHangs = loHangs;
    }
}
