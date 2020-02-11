
<template>
  <div style="border: 1px solid red;padding: 10px;margin:10px">
    <h1>组件1</h1>
    <slot></slot>
    <div>子组件传过来的静态标题: {{title}}</div>
    <div>子组件传过来的动态内容: {{content}}</div>
    <div v-show="show" style="width:100px;height: 100px;background:green">父组件控制是否显示该绿框</div>
  </div>
</template>


<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "test1",
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
      show: {
        //   type: String,
          default: false
      }

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
  mounted() {},
  beforeUpdate() {},
  updated() {},

  methods: {}
};
</script>


<style scoped lang="scss">
</style>






