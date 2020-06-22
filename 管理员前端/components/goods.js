var goods_template = `
<div>
    <menu1 :item="1"></menu1>
    <p class="text-center text-white bg-primary" style="padding:10px;">商品列表</p>
    <div class="row">
        <div v-for="(item,index) in goods" @click="selectgood(item.id)" class="card col-6 border border-0">
            <div class="card-body">
                <img class="card-img-top" :src="url + item.thumbnail" alt="Card image"
                    style="width:100%">
              <p class="card-text">{{item.name}}&ensp;{{item.price|yuan}}</p>
            </div>
        </div>
    </div>
    <br> <br>
</div>
  `
const goods = {
  data() {
    return {
      goods:[],
      url:store.state.url
    }
  },
  filters: {
    yuan: function (yuan) {
      return yuan + "元"
    }
  },
  methods: {
    selectgood(id) {
      router.push({
        path: 'detail',
        query:{id:id}
      })
    }
  },
  mounted() {
    //发送get请求
    axios.get(this.url + 'goods')
        .then(response => {
          this.goods = response.data;
         // console.log(this.goods)
        })
        .catch(error => console.log(error));// 请求失败处理
},
  template: goods_template
}


