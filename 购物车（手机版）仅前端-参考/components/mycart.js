var mycart_template = `
<div>
<p class="text-center text-white bg-primary" style="padding:10px;">购物车</p>
<template v-if="mycarts.length">
    <div class="media border border-light" v-for="(item,index) in mycarts" style="margin:10px;">
        <img :src="store.state.imgurl+item.img" class="align-self-top mr-3" style="width:100px;">
        <div class="media-body">
            {{item.gname}}<br>
            单价：{{item.price}} &emsp;金额：{{item.num*item.price}}<br>
            <button @click="handleReduce(index)">-</button>
            {{item.num}}
            <button @click="handleAdd(index)">+</button>
            <a @click="handleRemove(index)"  class="float-right text-primary" style="margin-right:30px;">移除</a>
        </div>
    </div>
    <h6 class="float-right" style="margin-right:30px;">总价：¥{{totalPrice}}</h6>
    <br><br>
    <div class="text-center">
      <router-link to="/home" class="btn btn-primary">继续购物</router-link>
      <a  class="btn btn-danger" @click="addorder()">结算</a>
    </div>
</template>
<div v-else>
    购物车为空
</div>
</div>
  `
const mycart = {
  data() {
    return {
      mycarts: store.state.carts
    }
  },
  methods: {
    handleReduce(index) {
      store.countReduce(index);
    },
    handleAdd(index) {
      store.countAdd(index);
    },
    handleRemove(index) {
      store.Remove(index)
    },
    addorder() {
      store.addorder();
      router.push({
        path: 'myorders'
      })
    }
  },
  computed: {
    totalPrice: function () {
      var total = 0;
      for (var i = 0, len = this.mycarts.length; i < len; i++) {
        total += this.mycarts[i].price * this.mycarts[i].num;
      }
      return total.toString();
    }
  },

  template: mycart_template
}


