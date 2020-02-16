
<template>
  <div>
    <h1>组件通信方式1(prop, 父组件向子组件通信)</h1>
    <slot></slot>
    <div>子组件传过来的静态标题: {{title}}</div>
    <div>子组件传过来的动态内容: {{content}}</div>
    <div v-show="show" style="width:100px;height: 100px;background:green">父组件控制是否显示该绿框<i class="el-icon-close" @click="closeGreen()"></i></div>
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "testProp",
  components: {},
  props: {
      title: {
          type: String,
          default: ""
      },
      content: {
          type: Number,
          default: 0
      },
      show: Boolean,

  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",
      didi: 0,
      arr: [1, 2, 3, 4],
      obj: {
        "11": 111,
        "22": 222,
        "33": 333
      },
      checked1: ["欢欢"],
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
    closeGreen() {

    }
  }
};
</script>


<style scoped lang="scss">
</style>






