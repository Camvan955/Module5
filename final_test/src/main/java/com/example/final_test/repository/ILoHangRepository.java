package com.example.final_test.repository;

import com.example.final_test.model.LoHang;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ILoHangRepository extends JpaRepository<LoHang, Integer> {

@Query (value = "select s.*,l.* from lo_hang l join san_pham s on l.san_pham_id_sp = s.id_sp",countQuery = "select s.*,l.* from lo_hang l join san_pham s on l.san_pham_id_sp = s.id_sp",nativeQuery = true)
    List<LoHang> getAllLohang();

    @Query (value = "select s.*,l.* from lo_hang l join san_pham s on l.san_pham_id_sp = s.id_sp",countQuery = "select s.*,l.* from lo_hang l join san_pham s on l.san_pham_id_sp = s.id_sp",nativeQuery = true)
    Page<LoHang> findAll1(Pageable pageable);

}
