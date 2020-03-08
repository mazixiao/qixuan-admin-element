
<template>
  <div class="content-s">
    <h1>命名视图1</h1>



  </div>
</template>


<script>
import commonHeader from "../../../components/header";



// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "namedViewChild1",
  components: {
    commonHeader,
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





