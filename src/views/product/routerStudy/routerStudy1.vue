
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="路由学习1" name="first">
        <!-- <h1>自定义指令</h1> -->
        <br />

        <p>这个页面的其他内容</p>
        <div>
          <el-button
            v-for="(item, index) in routers"
            :key="index"
            type="success"
            @click="routerLink(item, index)"
            :class="[$route.meta.index === index ? 'red': '' ]"
          >点击跳转{{item.name}}</el-button>
        </div>

        <router-link
          :class="['link', $route.meta.index === index ? 'link-active': '' ]"
          v-for="(item, index) in routers"
          :to="{path: item.url, query: item.query, hash: item.hash}"
          :key="index"
        >{{item.name}}</router-link>



        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>

        <p>这个页面的其他内容</p>

        <!-- 模拟多选框 -->
        <!-- https://blog.csdn.net/a_grain_of_wheat/article/details/93159391 -->
        <div>
          <div
            @click="selectReason(item, index)"
            :class="selectArr.indexOf(item) != -1?'selectColor':''"
            v-for="(item, index) in peoples"
            :key="index"
          >
            <span v-if="selectArr.indexOf(item) != -1">被选中</span>
            <span v-else>点击选中</span>
            <strong>{{item}}</strong>
          </div>
          我选中了：{{selectArr}}
        </div>

        <p>通过query传过来的值：{{$route.query}}</p>
        <p>根据params路径参数传参： {{$route.params}}</p>
        <p>根据hash(#)传参： {{$route.hash}}</p>

        <router-link :to="{name:'router1',params:{userId:'12326',youId:'4699'}}">
          通过router-link，vue里的params传值只能用name不能用path -- params方式传递来的参数存储在router对象里,使用this.$route方式获取该对象
          <br>
          <br>
          :to="{name:'router1',params:{userId:'12326',youId:'4699'}}"
        </router-link>

        <br>
        <br>
        <br>
        <el-button type="success" @click="$router.push('/')">点击跳转至首页(字符串写法)</el-button>
        <el-button type="success" @click="$router.push({path: '/'})">点击跳转至首页(对象写法)</el-button>
        <p>
          命名路由
          <el-button type="success" @click="$router.push({name: 'index', params: {userId: '迪迪'}})">点击跳转至首页(命名路由)</el-button>
        </p>
        <p>
          带查询参数(?后面的值)
          <el-button type="success" @click="$router.push({path: '/', query: {userId: '我是传给首页的参数'}})">点击跳转至首页(query)</el-button>
        </p>
        <br>
        <br>
        <h1>router.replace</h1>
        <br>  
        <router-link :to="{name: 'index'}" replace>声明式:to="..." replace</router-link>
        <br>
        <br>
        <el-button type="success" @click="$router.replace({path: '/'})">编程式：$router.replace(...)</el-button>

        <br>
        <br>
        <h1>router.go(n)</h1>

        <el-button type="success" @click="$router.go(1)">$router.go(1)在浏览器记录中前进一步，</el-button>
        <el-button type="success" @click="$router.go(-3)">$router.go(3)在浏览器记录中后退三步，</el-button>


        <br>
        <br>
        <h1>命名路由</h1>
        <br>
        <pre>
          routes: [
            {
              path: '/user/:userId',
              name: 'user',
              component: User
            }
          ]
        </pre>
        <br>
        <br>
        <h2>用 :to="{path: '/'}" 和 :to="{name: 'index'}" 效果是一样的</h2>
        <br>
        <router-link :to="{path: '/'}">:to="{path: '/'}"(可以给 router-link 的 to 属性传一个对象)</router-link>
        <br>
        <br>
        <router-link :to="{name: 'index'}">:to="{name: 'index'}" (命名路由)</router-link>










        
        <!------------------------------------------------------------------>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../../components/header";
import router1 from "./router1";
import router2 from "./router2";

// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "routerStudy1",
  components: {
    commonHeader,
    router1,
    router2
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",
      show: true,
      value1: "ad",
      routers: [
        {
          url: "/product/routerStudy/routerStudy1/router1/",
          name: "路由组件1",
          query: {
            query1: '过query查询参数传参11,不需要配置路由',
            query8: '过query查询参数传参',
          },
          hash: "#后面的参数11"
        },
        {
          url: "/product/routerStudy/routerStudy1/router2/1111",
          name: "路由组件2",
          query: {
            query1: '过query查询参数传参22,不需要配置路由'
          },
          hash: "#后面的参数22"
        }
      ],
      peoples: ["迪迪", "乐乐", "果果"],
      selectArr: []
    };
  },
  // 自定义指令
  directives: {},
  // 过滤器
  filters: {},

  computed: {},

  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {

    console.log(this.$route, "this.$route");

// js遍历跳出循环
// https://blog.csdn.net/guxin_duyin/article/details/82980062


// 给出一个路由 { path: '/user-*' }
// this.$router.push('/user-admin')
 // 'admin'
// 给出一个路由 { path: '*' }
// this.$router.push('/non-existing')
// this.$route.params.pathMatch // '/non-existing'




  },
  beforeUpdate() {},
  updated() {},

  methods: {
    sortFun(value1, value2) {
      if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    },

    selectReason(item, index) {
      let indexItem = this.selectArr.indexOf(item);
      if (indexItem == -1) {
        this.selectArr.push(item);
      } else {
        this.selectArr.splice(indexItem, 1);
      }
    },
    routerLink(item, index) {
      // this.$router.push(item.url);
      this.$router.push({path: item.url});
    }
  },
  watch: {}
};
</script>


<style scoped lang="scss">
.content {
  padding-bottom: 200px;
}

.link {
  padding: 5px;
  margin: 5px;
}
.red {
  background-color: red;
}

.router-link-active,
.link-active {
  color: red;
}
.selectColor {
  strong {
    color: red;
  }
}

/deep/ {
  .aa {
    background: red;
  }
}

hr,
div,
p {
  margin: 10px 0;
}

.transitionName-enter-active,
.transitionName-leave-active {
  transition: all 0.3s ease;
}

.transitionName-enter, .transitionName-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>





