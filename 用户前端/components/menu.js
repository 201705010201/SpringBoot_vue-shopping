var menu_template = `
  <nav class="navbar fixed-bottom bg-white border border-top-2 border-light">
    <router-link to="/home" :class="['nav-link',item==1 ? 'text-danger' : 'text-dark']">首页</router-link>
    <router-link to="/mycart" :class="['nav-link',item==2 ? 'text-danger' : 'text-dark']">购物车</router-link>
  </nav>
  `
Vue.component('menu1', {
  props: {
    item : String,
  },
  data: function () {
    return {
    }
  },
  template: menu_template,
});
