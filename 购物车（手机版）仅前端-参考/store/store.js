var store = {
  state: {
    url: 'http://localhost:8080/login/',
    imgurl: 'img/',
    usergname: '',
    goods: [{
      gid: "1",
      gname: "1281G曲奇大礼包",
      img: "1.jpg",
      price: 15,
      num:1
    },
    {
      gid: "2",
      gname: "海鸭蛋黄酱",
      img: "2.jpg",
      price: 20,
      num:1
    },
    {
      gid: "3",
      gname: "麻辣小龙虾4-6钱中虾",
      img: "3.jpg",
      price: 50,
      num:1
    },
    {
      gid: "4",
      gname: "麦提莎520g",
      img: "4.jpg",
      price: 34,
      num:1
    },
    {
      gid: "5",
      gname: "千丝绿豆饼整2箱",
      img: "5.jpg",
      price: 25,
      num:1
    },
    {
      gid: "6",
      gname: "素食粥6桶",
      img: "6.jpg",
      price: 15,
      num:1
    },
    {
      gid: "7",
      gname: "泰国榴莲",
      img: "7.jpg",
      price: 34,
      num:1
    },
    {
      gid: "8",
      gname: "新鲜秭归伦晚春脐橙",
      img: "8.jpg",
      price: 45,
      num:1
    },
    {
      gid: "9",
      gname: "烟台大樱桃",
      img: "9.jpg",
      price: 120,
      num:1
    },
    {
      gid: "10",
      gname: "越南进口板栗红薯",
      img: "10.jpg",
      price: 23,
      num:1
    }
    ],
    carts:[],
    orders:[]
  },
  addcart(newValue) {
    this.state.carts.push(newValue);
    //console.log(this.state.carts)
  },
  countReduce(index) {
    if (this.state.carts[index].num === 1) return;
    this.state.carts[index].num--;
  },
  countAdd(index) {
    this.state.carts[index].num++;
  },
  Remove(index) {
    this.state.carts.splice(index, 1);
  },
  addorder() {
    for(i=0; i < this.state.carts.length; i++){
      this.state.orders.push(this.state.carts[i]);
    };
    this.state.carts.splice(0,this.state.carts.length);
  },
  add(newValue) {
    this.state.goods.push(newValue);
  },
}
