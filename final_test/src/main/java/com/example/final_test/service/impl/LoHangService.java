package com.example.final_test.service.impl;

import com.example.final_test.model.LoHang;
import com.example.final_test.model.SanPham;
import com.example.final_test.repository.ILoHangRepository;
import com.example.final_test.service.ILoHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LoHangService implements ILoHangService {

    @Autowired
    private ILoHangRepository loHangRepository;

//    @Override
//    public Page<LoHang> findAll(Pageable pageable) {
//        return loHangRepository.findAll1(pageable);
//    }

    @Override
    public void save(LoHang loHang) {
        loHangRepository.save(loHang);
    }

    @Override
    public void update(LoHang loHang) {
        loHangRepository.save(loHang);
    }

    @Override
    public List<LoHang> getAll() {
        return loHangRepository.getAllLoHang();
    }

    @Override
    public LoHang finById(int id) {
        return loHangRepository.findByIdLoHang(id);
    }

    @Override
    public void remove(int id) {
        loHangRepository.deleteById(id);
    }

}
