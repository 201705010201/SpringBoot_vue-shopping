package com.sd;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import com.sd.entity.Cart;
import com.sd.service.CartService;
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
public class CartServiceTest {
    
    @Autowired
    private CartService cartService;
 
    @Test
    public void testSelectAll(){
        //调用selectDept方法
        List<Cart> carts  = cartService.selectCartByUserId("sd");
        System.out.println(carts.toString());
    }
    
    @Test
    public void insert(){
        Cart cart = new Cart();
        cart.setUserid("sd");
        cart.setGoodsid("10");
        cart.setNum(1);
        cartService.insertCart(cart);
        System.out.println(cart.toString());
    }
    
    @Test
    public void update(){
        Cart cart = new Cart();
        cart.setUserid("sd");
        cart.setGoodsid("10");
        cart.setNum(3);
        cartService.updateCart(cart);
        System.out.println(cart.toString());
    }
    
    @Test
    public void delete(){
        Cart cart = new Cart();
        cart.setUserid("sd");
        cart.setGoodsid("10");
        cartService.deleteCart(cart);
    }

}
