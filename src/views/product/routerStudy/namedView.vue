
<template>
  <div class="content">
      <commonHeader></commonHeader>
    <h1>命名视图</h1>




　　<div>
　　　　<ul class="nav">
　　　　　　<li><router-link :to="{path: '/product/routerStudy/namedViewChild1'}">list1</router-link></li>
　　　　　　<li><router-link :to="{path: '/product/routerStudy/namedViewChild2'}">list2</router-link></li>
　　　　　　<li><router-link :to="{path: '/product/routerStudy/namedViewChild3'}">list3</router-link></li>
　　　　</ul>
　　　　<h6>默认视图</h6>
　　　　<div class="view">
　　　　　　<router-view></router-view>
　　　　</div>
　　　　<h6>a视图</h6>
　　　　<div class="view">
　　　　　　<router-view name="a"></router-view>
　　　　</div>
　　　　<h6>b视图</h6>
　　　　<div class="view">
　　　　　　<router-view name="b"></router-view>
　　　　</div>
　　</div>



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
      activeName: "first",

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
  mounted() {},
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





