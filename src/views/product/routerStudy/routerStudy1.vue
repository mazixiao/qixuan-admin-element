
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="路由学习1" name="first">
        <!-- <h1>自定义指令</h1> -->
        <br />

    <router-link class="link" to="/product/routerStudy/routerStudy1/router1">跳转路由组件1</router-link>
    <router-link class="link" to="/product/routerStudy/routerStudy1/router2">跳转路由组件2</router-link>
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view></router-view>


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
    router2,
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",
      show: true,
      value1: "ad",
    };
  },
  // 自定义指令
  directives: {

  },
  // 过滤器
  filters: {

  },


  computed: {},

  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
      console.log(this.$route.path);

      if (this.$route.path == "/product/routerStudy/routerStudy1") {
        this.$route.path = "/product/routerStudy/routerStudy1/router1"
      } 
    


  },
  beforeUpdate() {},
  updated() {},

  methods: {



  },
  watch: {

  }
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

.router-link-active {
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





