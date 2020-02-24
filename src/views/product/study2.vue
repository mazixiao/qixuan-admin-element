
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="vue学习2" name="first">
        <h1>自定义指令</h1>
        <br />
        <p>页面一加载聚焦输入框</p>
        <input type="text" v-focus />

        <hr />
        <h1>过滤器</h1>
        <div>
          <input type="text" v-model="value1" />
          <p>过滤器处理过的值(将小写字母转换成大写):</p>
          <strong>{{value1 | toUpperCaseFun}}</strong>
          <br />
          <p>串联过滤器,先执行toUpperCaseFun，再执行toLowerCaseFun</p>
          <strong>{{value1 | toUpperCaseFun | toLowerCaseFun}}</strong>
        </div>
        <!------------------------------------------------------------------>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../components/header";
// 混入 (mixin)
import commonMixin from "../../assets/js/commonMixin.js";

// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "study2",
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
  // 自定义指令
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  // 过滤器
  filters: {
    // 转大写
    toUpperCaseFun: function(value) {
      return value.toUpperCase();
    },
    // 转小写
    toLowerCaseFun: function(value) {
      return value.toLowerCase();
    }
  },

  // 混入 (mixin)
  mixins: [commonMixin],
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
}

/deep/ {
}

hr,
div,
p {
  margin: 10px 0;
}
</style>





