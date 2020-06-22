create database mis;

use mis;

drop table t_user;

create table t_user (
  username varchar(20) not null,
  password varchar(200),
  phone varchar(20),
  created date,
  role varchar(10),
  primary key (username)
);

insert into t_user(username,password,phone,created,role) values
('user1','$2a$10$KABH3XG/tqV9IUe3.UPt6.1ILlg93PV6JRxTeowh9JBb0MCJi2w.a','13900000000','2020-3-17','user'),
('user2','$2a$10$zD6rDi0lcittW8KMRuaKu.EtvUUEPB6I6ATr.rzdyvizXbynT/.Di','13800000000','2020-3-17','user'),
('admin','$2a$10$w3uSO1JkzSx5smxazd6wheGgWRHtufepM8juLzWfmqIkyFqzkgT2y','13700000000','2020-3-17','admin');

#用户密码123456





