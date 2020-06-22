var myorders_template = `
  <div>
    <menu1 :item="3"></menu1>
    <br><br>
    <div class="container">
    <h5>{{ msg }}</h5>
    </div>
    <template v-if="myorders.length">
      <div class="media border border-light" v-for="(item,index) in myorders" style="margin:10px;">
          <img :src="store.state.imgurl+item.img" class="align-self-top mr-3" style="width:100px;">
          <div class="media-body">
              {{item.gname}}<br>
              单价：{{item.price}}  &emsp;数量：{{item.num}}&emsp;金额：{{item.num*item.price}}<br>
            
          </div>
      </div>

      <br><br>
      <div class="text-center">
        <router-link to="/home" class="btn btn-primary">继续购物</router-link>
      </div>
    </template>
    <div v-else>
        还没有商品！
    </div>
  </div>
  `
const myorders= {
  data() {
    return {
      msg: '已购买商品如下：',
      myorders:store.state.orders
    }
  },

  template: myorders_template
}
