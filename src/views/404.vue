
<template>
  <div :class="['content', {'active': isCollapse}]">
    <commonHeader></commonHeader>


    <h1 class="notFind">404</h1>

    <h1>{{this.$route.params.pathMatch}}</h1>



  </div>
</template>


<script>
import commonHeader from "../components/header";

// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "notfind404",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",
      show: true,
      value1: "ad"
    };
  },
  computed: {
    ...mapState(["count", "count1", "isCollapse"]),
      // isCollapse() {
      //     return this.$store.state.isCollapse
      // },
  },

  // 自定义指令
  directives: {},
  // 过滤器
  filters: {},



  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {


  },
  beforeUpdate() {},
  updated() {},

  methods: {},
  watch: {
    '$route'(to, from) {
      // console.log(to, "我是当前页面的路由信息");
      // console.log(from, "我是上一个页面的路由信息");
    }
  },


  // 下面三个是组件内的守卫
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    next()
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`

    next()
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    next()
  }



};
</script>


<style scoped lang="scss">
.content {
  padding-bottom: 200px;
  margin-left: 50px;
}

/deep/ {
  .aa {
    background: red;
  }
}

.notFind {
  font-size: 150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

hr,
div,
p {
  margin: 10px 0;
}
</style>





