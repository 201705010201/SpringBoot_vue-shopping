package com.sd.controller;
import com.sd.entity.Cart;
import com.sd.service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/cart")
@CrossOrigin
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping
    public List<Cart> selectCartByUserId()
    {
        //String userid = "sd";//下一步以登录的用户名为准
        String userid = SecurityContextHolder.getContext().getAuthentication().getName();//获取登录的用户名。
        List<Cart> carts = this.cartService.selectCartByUserId(userid);
        return carts;
    }

    @PostMapping
    public void insertCart(@RequestBody Cart cart)
    {
        //cart.setUserid("sd");//下一步以登录的用户名为准
        String userid = SecurityContextHolder.getContext().getAuthentication().getName();//获取登录的用户名。
        cart.setUserid(userid);
        this.cartService.insertCart(cart);
    }

    @DeleteMapping
    public void deleteCart(@RequestBody Cart cart)
    {
        //cart.setUserid("sd");//下一步以登录的用户名为准
        String userid = SecurityContextHolder.getContext().getAuthentication().getName();//获取登录的用户名。
        cart.setUserid(userid);
        this.cartService.deleteCart(cart);
    }

    @PutMapping
    public void updateCart(@RequestBody Cart cart)
    {
        //cart.setUserid("sd");//下一步以登录的用户名为准
        String userid = SecurityContextHolder.getContext().getAuthentication().getName();//获取登录的用户名。
        cart.setUserid(userid);
        this.cartService.updateCart(cart);
    }


}
