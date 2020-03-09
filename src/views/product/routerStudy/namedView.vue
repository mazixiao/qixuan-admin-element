
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <h1>命名视图</h1>
    <hr>

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

    <router-view></router-view>
    <router-view name="namedViewChild1"></router-view>
    <router-view name="namedViewChild2"></router-view>
    <router-view name="namedViewChild3"></router-view>
    



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
  // 自定义指令
  directives: {},
  // 过滤器
  filters: {},

  computed: {},

  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {},
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
</style>





