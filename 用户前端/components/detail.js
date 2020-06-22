var detail_template = `
<div>
    <p class="text-center text-white bg-primary" style="padding:10px;">商品详情</p>
    <div class="media border border-light"  style="margin:10px;">
    <img :src="url + goods.thumbnail" class="align-self-top mr-3" style="width:150px;">
        <div class="media-body">
            商品：{{goods.name}}<br><br>
            <p>{{goods.content}}</p>
            价格：{{goods.price}}元 <br><br>
            <a @click="addgoods()" class="btn btn-primary">加入购物车</a>
        </div>
    </div>
    <br><br>
    <div class="text-center">
      <router-link to="/home" class="btn btn-danger">返回首页</router-link>
      <router-link to="/mycart" class="btn btn-danger">购物车</router-link>
    </div>

</div>
  `
const detail = {
  data() {
    return {
      goods: '',
      url: store.state.url,
      cart: {
        userid: '',
        goodsid: '',
        num: 1,
        goods: {}
      }
    }
  },
  methods: {
    addgoods() {
      this.cart.goodsid = this.goods.id;
      this.cart.goods = this.goods;
      axios.post(this.url + 'cart', this.cart)
        .then(response => {
          alert("添加成功！")
        })
        .catch(error => console.log(error));// 请求失败处理
    },

  },
  mounted() {
    //发送get请求
    axios.get(this.url + 'goods/' + this.$route.query.id)
      .then(response => {
        //  console.log(response);
        this.goods = response.data;
      })
      .catch(error => console.log(error));// 请求失败处理
  },

  template: detail_template
}
