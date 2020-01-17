// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 使用ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

Vue.use(ElementUI)


// ajax
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$axios = axios;   // 2、在vue中使用axios

// Vue.config.productionTip = false

Vue.use(VueAxios,axios);




Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});


/* eslint-disable no-new */
new Vue({
  el: '#app',

  router,
  components: { App },
  template: '<App/>'
})
