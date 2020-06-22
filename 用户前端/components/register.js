var register_template = `
<div id="app" class="container">
<br>
<h4 class="text-center">用户注册</h4><br>

    <div class="form-group">
        <label for="username">用户名:</label>&nbsp;
        <input type="text" v-model="t_user.username" class="form-control" id="username">
    </div>
    <div class="form-group">
        <label for="password">密码:</label>&nbsp;
        <input type="password" v-model="t_user.password" class="form-control" id="password">
    </div>
    <div class="form-group">
        <label for="phone">手机:</label>&nbsp;
        <input type="text" v-model="t_user.phone" class="form-control" id="phone">
    </div>
    <div class="form-group">
        <button v-on:click="register_1" class="btn btn-primary btn-block">注册</button>
    </div>


</div>
  `
const register = {
  data() {
    return {
        t_user: {username: '', password: '', phone: ''},
        url: store.state.url,
    }
  },
  methods: {
    register_1() {
      axios.post(this.url + 'register/',this.t_user )
        .then(response => {
          var temps = response.data;
          if (temps.status == 'success') {
            alert("注册成功");
            router.push({
                path: 'login'
              })
          } else {
            alert("注册失败");
            return;
          }
        })
        .catch(error => console.log(error));// 请求失败处理
    },
  },
  template: register_template
}
