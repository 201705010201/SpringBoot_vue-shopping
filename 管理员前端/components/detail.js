var detail_template = `
<div>
    <p class="text-center text-white bg-primary" style="padding:10px;">商品详情</p>
    <div class="media border border-light"  style="margin:10px;">
        <img :src="url + goods.thumbnail" class="align-self-top mr-3" style="width:150px;">
        <div class="media-body">
            商品：{{goods.name}}<br><br>
            <p>{{goods.content}}</p>
            价格：{{goods.price}}元 <br><br>
            <a @click="updategoods(goods.id)" class="btn btn-primary">编辑</a>
            <a @click="removegoods(goods.id)" class="btn btn-primary">下架</a>
        </div>
    </div>
    <br><br>
    <div class="text-center">
      <router-link to="/goods" class="btn btn-danger">返回首页</router-link>
    </div>

</div>
  `
const detail = {
  data() {
    return {
      goods: '',
      url: store.state.url,
    }
  },
  methods: {
    updategoods(id) {
      router.push({
        path: 'update',
        query: { id: id },
    })
    },
    removegoods(id) {
      axios.delete(this.url+'goods/' + id)
      .then(response => {
       alert("商品已下架！")
       router.push({
         path:'goods'
       })
      })
      .catch(error => console.log(error));
    }

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
