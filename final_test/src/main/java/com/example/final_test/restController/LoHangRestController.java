package com.example.final_test.restController;

import com.example.final_test.model.LoHang;
import com.example.final_test.service.ILoHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("lo-hangs")
@CrossOrigin("*")
public class LoHangRestController {

    @Autowired
    private ILoHangService loHangService;

    @GetMapping("")
    public ResponseEntity<Page<LoHang>> getList(@PageableDefault(page = 0, size = 3) Pageable pageable) {
        Page<LoHang> loHangList = loHangService.findAll(pageable);

        if (loHangList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(loHangList, HttpStatus.OK);
    }

//    @GetMapping("/san-pham/{san-pham}")
//    public ResponseEntity<List<LoHang>> getListSanPham(@PathVariable("sap-pham") SanPham sanPham) {
//        List<LoHang> loHangList = loHangService.
//        if (loHangList.isEmpty()) {
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//        return new ResponseEntity<>(blogList, HttpStatus.OK);
//
//
//    }
}
