<template>
  <div>
    <h3>组件1(keep-alive)</h3>
    <br>
    <el-button
      type="success"
      :class="{activeTab: currentTabTit === index}"
      @click="tabsFun(tab, index)"
      v-for="(tab, index) in tabsTit"
      :key="tab"
    >{{tab}}</el-button>
    <div class="tab-con">
      <strong v-show="currentTabTit === index" v-for="(item, index) in tabCon" :key="index">
        {{item}}
      </strong>
    </div>

  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "keepAlive1",
  components: {},
  props: {
    valueCon: String
  },
  data() {
    return {
      currentTabTit: 0,
      currentTabCon: 0,
      tabsTit: [
        "按钮1",
        "按钮2",
        "按钮3",
      ],
      tabCon: [
        "我是内容1",
        "我是内容2",
        "我是内容3",
      ]
    };
  },
  computed: {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
    // 父级 prop 的更新会向下流动到子组件中，但是反过来则不行
    // this.$props.show = false
  },
  beforeUpdate() {},
  updated() {},

  methods: {
    tabsFun(tab, index) {
        this.currentTabTit = index;
    }
  }
};
</script>


<style scoped lang="scss">
  .activeTab {
    background-color: pink;
  }
</style>






