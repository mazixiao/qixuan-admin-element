
<template>
  <div class="content-touter">
      <!-- <commonHeader></commonHeader> -->
    <h1>路由组件1</h1>

    <!-- 模拟复选框测试 -->

    <div>
      <p v-for="item in arr" :key="item" @click="checkboxFun(item)">
        <span :class="[checkbox.indexOf(item) != -1 ? 'red': '']">0</span>
        {{item}}
      </p>
      <strong>选中了： {{checkbox}}</strong>
    </div>
  </div>
</template>


<script>
import commonHeader from "../../../components/header";



// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "router1",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",
      show: true,
      value1: "ad",
      arr: ["贝贝", "晶晶", "欢欢"],
      checkbox: [],
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

    checkboxFun(item) {
      var item_s = this.checkbox.indexOf(item);
      if(item_s == -1) {
        this.checkbox.push(item);
      } else {
        this.checkbox.splice(item_s, 1);
      };
    }


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





