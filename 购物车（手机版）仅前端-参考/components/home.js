var home_template = `
<div>
    <menu1 :item="1"></menu1>
    <p class="text-center text-white bg-primary" style="padding:10px;">商品列表</p>
    <div class="row">
        <div v-for="(item,index) in goods" @click="selectgood(item.gid)" class="card col-6 border border-0">
            <div class="card-body">
                <img class="card-img-top" :src="store.state.imgurl+item.img" alt="Card image"
                    style="width:100%">
              <p class="card-text">{{item.gname}}&ensp;{{item.price|yuan}}</p>
            </div>
        </div>
    </div>
    <br> <br>
</div>
  `
const home = {
  data() {
    return {
      goods:store.state.goods
    }
  },
  filters: {
    yuan: function (yuan) {
      return yuan + "元"
    }
  },
  methods: {
    selectgood: function(id){
      router.push({
        path: 'detail',
        query:{id:id}})
    }
  },
  template: home_template
}


