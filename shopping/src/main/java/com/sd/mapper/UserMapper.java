package com.sd.mapper;

import com.sd.entity.User;

public interface UserMapper {

	/**
	 * 根据id查询
	 * @param username
	 * @return
	 */
	public User findOneByUserName(String username) ;

	public void insertUser(User user);
}
