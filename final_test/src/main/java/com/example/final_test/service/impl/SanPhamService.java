package com.example.final_test.service.impl;

import com.example.final_test.model.SanPham;
import com.example.final_test.repository.ISanPhamRepository;
import com.example.final_test.service.ISanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SanPhamService implements ISanPhamService {

    @Autowired
    private ISanPhamRepository sanPhamRepository;

    @Override
    public List<SanPham> findAll() {
        return sanPhamRepository.findAll();
    }

    @Override
    public Optional<SanPham> findById(int id) {
        return sanPhamRepository.findById(id);
    }
}
