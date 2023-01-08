package com.example.final_test.service;

import com.example.final_test.model.SanPham;

import java.util.List;
import java.util.Optional;

public interface ISanPhamService {
    List<SanPham> findAll();

    Optional<SanPham> findById(int id);
}
