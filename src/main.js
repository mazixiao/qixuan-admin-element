// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 使用ElementUI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'

//引入store(vuex)
import store from './store'

Vue.use(ElementUI)

// 富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor)


// ajax
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$axios = axios;   // 2、在vue中使用axios

// Vue.config.productionTip = false

Vue.use(VueAxios, axios);

import echarts from 'echarts'
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false
var index = 0;
router.beforeEach((to, from, next) => {
  index++
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // 默认加载想要的页面
  if (index == 1) {
    next({
      path: '/printing/rawCode/rule'
    })
  };
  next()
 
});


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
