package com.example.final_test.service;

import com.example.final_test.model.LoHang;
import com.example.final_test.model.SanPham;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface ILoHangService {

    Page<LoHang> findAll(Pageable pageable);

    void save(LoHang loHang);

    void update(LoHang loHang);

    Optional<LoHang> findById(int id);

    List<LoHang> getAll();
}
