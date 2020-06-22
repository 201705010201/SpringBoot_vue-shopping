var mycart_template = `
<div>
<p class="text-center text-white bg-primary" style="padding:10px;">购物车<button v-on:click="logout" class="btn btn-link float-right text-white">退出</button></p>
<template v-if="carts.length">
    <div class="media border border-light" v-for="(item,index) in carts" style="margin:10px;">
        <img :src="url+item.goods.thumbnail" class="align-self-top mr-3" style="width:100px;">
        <div class="media-body">
            {{item.goods.name}}<br>
            单价：{{item.goods.price}} &emsp;金额：{{item.num*item.goods.price}}<br>
            <button @click="countReduce(index)">-</button>
            <span @change="updateNum(index)" v-model="item.num">{{item.num}}</span>
            <button @click="countAdd(index)">+</button>
            <a @click="Remove(index)"  class="float-right text-primary" style="margin-right:30px;">移除</a>
        </div>
    </div>
    <h6 class="float-right" style="margin-right:30px;">总价：¥{{totalPrice}}</h6>
    <br><br>
    <div class="text-center">
      <router-link to="/home" class="btn btn-primary">继续购物</router-link>
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
      carts: [],
      url: store.state.url, 
    }
  },
  methods: {
    countReduce(index) {
      if (this.carts[index].num === 1) return;
      this.carts[index].num--;
      this.updateNum(index)
    },
    countAdd(index) {
      this.carts[index].num++;
      this.updateNum(index)
    },
    updateNum(index) {
      axios.put(this.url + 'cart',this.carts[index])
      .then(response => {
          console.log(response);
      })
      .catch(error => console.log(error));// 请求失败处理
    },
    Remove(index) {
      axios.delete(this.url + 'cart',{data:this.carts[index]})
                .then(response => {
                    // console.log(response.data);
                    this.carts.splice(index, 1);//从下标i开始删除1个元素：删除下标为i的元素
                })
                .catch(error => console.log(error));// 请求失败处理
    },
    logout() {
      axios.post(this.url + 'logout')
        .then(response => {
          var temps = response.data;
          if (temps.status == 'success') {
            //this.returnvalue = '退出成功';
            alert("退出成功");
            router.push({
              path: '/'
            })
          } else {
            alert("退出失败");
          }
        })
        .catch(error => console.log(error));// 请求失败处理
    },
  },
  
  computed: {
    totalPrice: function () {
      var total = 0;
      for (var i = 0, len = this.carts.length; i < len; i++) {
        total += this.carts[i].goods.price * this.carts[i].num;
      }
      return total.toString();
    }
  },
  mounted() {
    //发送get请求
    axios.get(this.url + 'cart')
      .then(response => {
        //  console.log(response);
        this.carts = response.data;
      })
      .catch(error => console.log(error));// 请求失败处理
  },

  template: mycart_template
}


