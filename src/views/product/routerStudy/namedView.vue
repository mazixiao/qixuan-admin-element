
<template>
  <div :class="['content', {'active': isCollapse}]">
    <commonHeader></commonHeader>
    <h1>命名视图</h1>
    <hr />

    <!-- /product/routerStudy/routerStudy1/router1/ -->
    <ul>
      <li>
        <router-link to="/product/routerStudy/namedView/namedViewChild1">namedViewChild1</router-link>
      </li>
      <li>
        <router-link to="/product/routerStudy/namedView/namedViewChild2">namedViewChild2</router-link>
      </li>
      <li>
        <router-link to="/product/routerStudy/namedView/namedViewChild3">namedViewChild3</router-link>
      </li>
    </ul>

    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>

    <transition name="fade-transform" mode="out-in">
      <router-view name="namedViewChild1"></router-view>
    </transition>

    <transition name="fade-transform" mode="out-in">
      <router-view name="namedViewChild2"></router-view>
    </transition>

    <transition name="fade-transform" mode="out-in">
      <router-view name="namedViewChild3"></router-view>
    </transition>
  </div>
</template>


<script>
import commonHeader from "../../../components/header";
import namedViewChild1 from "./namedViewChild1";
import namedViewChild2 from "./namedViewChild2";
import namedViewChild3 from "./namedViewChild3";
// import router2 from "./router2";

// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "namedView",
  components: {
    commonHeader,
    namedViewChild1,
    namedViewChild2,
    namedViewChild3
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first"
    };
  },
  computed: {
      isCollapse() {
          return this.$store.state.isCollapse
      },
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
  watch: {}
};
</script>


<style scoped lang="scss">
.content {
  padding-bottom: 200px;
  margin-left: 50px;
}
.red {
  color: red;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
    display: block;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  display: block;
}
</style>





