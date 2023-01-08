package com.example.final_test.restController;

import com.example.final_test.model.LoHang;
import com.example.final_test.service.ILoHangService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("lo-hangs")
@CrossOrigin("*")
public class LoHangRestController {

    @Autowired
    private ILoHangService loHangService;

    @GetMapping("")
    public ResponseEntity<List<LoHang>> getList() {
        List<LoHang> loHangList = loHangService.getAll();

        if (loHangList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(loHangList, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<LoHang> save(@RequestBody LoHang loHang) {
        loHangService.save(loHang);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("{id}")
    public ResponseEntity<LoHang> update(@RequestBody LoHang loHang, @PathVariable("id") Integer id) {
        LoHang loHang1 = loHangService.finById(id);
        if (loHang1 == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        loHangService.update(loHang);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<LoHang> findById(@PathVariable("id") Integer id) {
        LoHang loHang = loHangService.finById(id);
        if (loHang == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(loHang, HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<LoHang> delete(@PathVariable("id") Integer id) {
        LoHang loHang = loHangService.finById(id);
        if (loHang == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        loHangService.remove(id);
        return new ResponseEntity<>(loHang, HttpStatus.OK);
    }
}
