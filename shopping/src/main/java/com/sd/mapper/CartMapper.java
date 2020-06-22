package com.sd.mapper;

import com.sd.entity.Cart;
import java.util.List;

public interface CartMapper{

    public List<Cart> selectCartByUserId(String userid);

    public void insertCart(Cart cart);

    public void deleteCart(Cart cart);

    public Cart selectCartByCart(Cart cart);
    
    public void updateCart(Cart cart);
}
