package com.example.final_test.restController;

import com.example.final_test.model.SanPham;
import com.example.final_test.service.ISanPhamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("san-phams")
@CrossOrigin("*")
public class SanPhamController {

    @Autowired
    private ISanPhamService sanPhamService;

    @GetMapping("")
    public ResponseEntity<List<SanPham>> getList(){
        List<SanPham> sanPhamList = sanPhamService.findAll();

        if (sanPhamList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(sanPhamList ,HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SanPham> findCategoryById(@PathVariable int id){
        Optional<SanPham> sanPhamOptional = sanPhamService.findById(id);

        if (!sanPhamOptional.isPresent()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(sanPhamOptional.get(), HttpStatus.OK);
    }
}
