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

import './assets/js/mock'//此部分引入的是我们所编写的mockjs文档

// vue使用nprogress页面加载进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 简单配置
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 500, showSpinner: false })

Vue.use(ElementUI)

Vue.config.silent = true


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
// 全局前置守卫
router.beforeEach((to, from, next) => {
  // console.log(to.path, "to.path to.path");
  // console.log(from.path, "from from");
  index ++;
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }

  // 默认加载想要的页面
  if (index == 1) {
    next({
      path: '/overview/user'
    })
  };

    // 让页面回到顶部
  //  document.documentElement.scrollTop = 0;
	NProgress.start()
  next(
    true
  );

});


// router.beforeEach((to, from, next) => {
// 	NProgress.start()
// 	next()
//   })
  
//   router.afterEach(() => {
// 	NProgress.done()
//   })


// 全局后置钩子
router.afterEach((to, from) => {

  NProgress.done()
  // console.log(to.path, "to.path to.path");
  // console.log(from.path, "from from");
});



// router.scrollBehavior((to, from, savedPosition) => {
//   return 200
// })








/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
