package com.sd;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.sd.entity.Goods;
import com.sd.service.GoodsService;
import java.util.List;


import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author chnewei
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class GoodsServiceTest {
    
    @Autowired
    private GoodsService goodsService;
 
    @Test
    public void testSelectAll(){
        List<Goods> goods  = goodsService.selectGoodsAll();
        System.out.println(goods.toString());
    }
    
    @Test
    public void selectById(){
        Goods goods  = goodsService.selectGoodsById("1");
        System.out.println(goods.toString());
    }

    @Test
    public void insert(){
        Goods goods = new Goods();
        goods.setId("1234");
        goods.setName("苹果");
        goodsService.insertGoods(goods);
        System.out.println(goods.toString());
    }
    
    @Test
    public void update(){
        Goods goods = new Goods();
        goods.setId("1234");
        goods.setName("香蕉");
        goodsService.updateGoods(goods);
        System.out.println(goods.toString());
    }
    
    @Test
    public void delete(){
        goodsService.deleteGoods("1234");
    }
}
