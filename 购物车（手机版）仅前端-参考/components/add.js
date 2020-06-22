var add_template = `
<div>
    <p class="text-center text-white bg-primary" style="padding:10px;">新增商品</p> 
    <div class="container">
    <div>编码：<input type="text" class="form-control" v-model="good.gid" /></div>
    <div>名称：<input type="text" class="form-control" v-model="good.gname" /></div>
    <div>价格：<input type="text" class="form-control" v-model="good.price" /></div><br>
    <div>图片：<img :src="imgurl+good.img" /></div>
    <input type="file" @change="uploadFile($event)" class="form-control" v-model="filenameurl" accept=".jpg" />
    <br><button type="button" class="btn-block btn-primary" v-on:click="Save">保存</button>
    </div>
</div>
        `
const add = {
  data() {
    return {
      imgurl:'img/',
      filenameurl:'',
      content: '',
      good: { gid: "", gname: "", img: "placeholder.png", price: 0, num: 1 }
    }
  },
  methods: {

    //保存
    Save: function () {
      if (this.good.gid == '' || this.good.gname == '') {
        alert("编码或名称不能为空!");
        return;
      }

      store.add(this.good);

      //还原模板
      this.good = { gid: "", gname: "", img: "placeholder.png", price: 0, num: 1 };
    },
    uploadFile(event) {
      //获取文件名
      this.good.img = this.filenameurl.substring(this.filenameurl.lastIndexOf("\\") + 1);
      //上传到服务器（略）
    },
  },

  template: add_template
}
