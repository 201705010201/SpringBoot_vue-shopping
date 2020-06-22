var add_template = `
<div>
    <p class="text-center text-white bg-primary" style="padding:10px;">新增商品</p> 
    <div class="container">
    <div>编码：<input type="text" class="form-control" v-model="goods.id" /></div>
    <div>名称：<input type="text" class="form-control" v-model="goods.name" /></div>
    <div>描述：<input type="text" class="form-control" v-model="goods.content" /></div>
    <div>价格：<input type="text" class="form-control" v-model="goods.price" /></div><br>
    <div>图片：<img :src="url+goods.thumbnail" /></div>
    <input type="file" @change="uploadFile($event)" class="form-control" />
    <br><button type="button" class="btn-block btn-primary" v-on:click="Save">保存</button>
    </div>
</div>
        `
const add = {
  data() {
    return {
      url: store.state.url,
      goods: { id: "", name: "", thumbnail: "upload/placeholder.png", content:"", price: 0 }
    }
  },
  methods: {
    //保存
    Save: function () {
      if (this.goods.id == '' || this.goods.name == '') {
        alert("编码或名称不能为空!");
        return;
      }
      axios.post(this.url + 'goods/', this.goods)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => console.log(error));// 请求失败处理

      //还原模板
      this.goods = { id: "", name: "", thumbnail: "upload/placeholder.png", price: 0, num: 1 };
    },
    uploadFile(event) {
      var file = event.target.files[0]; //获取input的图片file值
      var formData = new FormData();     // 创建form对象
      formData.append('myfile', file);     //对应后台接收图片名

      axios.post(this.url + 'file', formData)
        .then(response => this.goods.thumbnail = response.data)
        .catch(error => console.log(error));// 请求失败处理
    },
  },
  template: add_template
}
