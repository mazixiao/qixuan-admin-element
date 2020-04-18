
<template>
  <div :class="['content', {'active': isCollapse}]">
    <commonHeader></commonHeader>
    <h1>ES6学习</h1>
    <hr />
    声明变量的6中方法
    var function let const import class

  </div>
</template>


<script>
import commonHeader from "../../components/header";
// import router2 from "./router2";

// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "es6Study1",
  components: {
    commonHeader,
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

  computed: {
    ...mapState(["count", "count1", "isCollapse"]),
      // isCollapse() {
      //     return this.$store.state.isCollapse
      // },
  },

  created: function() {



  },

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
    
    var aa = 123;
    if(true) {
      console.log(aa);
      let aa;
    }




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





