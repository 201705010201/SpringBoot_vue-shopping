package com.sd.controller;

import com.sd.entity.Goods;
import com.sd.service.GoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/goods")
public class GoodsController {

    @Autowired
    private GoodsService goodsService;

    @GetMapping
    public List<Goods> selectGoodsAll()
    {
        List<Goods> goodsList=this.goodsService.selectGoodsAll();
        return goodsList;
    }

    @GetMapping("{id}")
    public Goods selectGoodsById(@PathVariable String id)
    {
        Goods goods=this.goodsService.selectGoodsById(id);
        return goods;
    }

    @PostMapping
    public void insertGoods(@RequestBody Goods goods)
    {
        this.goodsService.insertGoods(goods);
    }

    @PutMapping
    public void updateGoods(@RequestBody Goods goods)
    {
        this.goodsService.updateGoods(goods);
    }

    @DeleteMapping("{id}")
    public void deleteGoods(@PathVariable String id)
    {
        this.goodsService.deleteGoods(id);
    }



}
