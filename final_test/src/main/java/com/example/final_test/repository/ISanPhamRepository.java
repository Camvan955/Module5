package com.example.final_test.repository;

import com.example.final_test.model.SanPham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ISanPhamRepository extends JpaRepository<SanPham, Integer> {
}
