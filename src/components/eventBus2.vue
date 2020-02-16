
<template>
  <div style="border: 1px solid green;padding: 10px;margin:10px">
    <h1>组件通信方式(eventBus2, 兄弟组件通信)</h1>
    <el-button type="success" @click="showFun">内部通过事件控制绿框</el-button>
    <div v-show="show" style="width:100px;height: 100px;background:green"></div>
    <h2>{{number}}</h2>
    <h2>
      eventBus传值:
      <span style="color: red">{{content}}</span>
      <h3>我是被兄弟组件传过来的参数改变的值<em style="color: red">{{number1}}</em></h3>
    </h2>
  </div>
</template>


<script>
import eventBus from "../assets/js/eventBus.js";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "eventBus2",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      show: true,
      number: 0,
      content: "兄弟子组件2",
      number1: 0,
    };
  },
  computed: {},

  beforeCreate() {},

  created() {
    let that = this;
    eventBus.$on("content", function(val) {
      that.content = val;
    });
  },

  beforeMount() {},
  mounted() {
    let that = this;
    eventBus.$on("show", function() {
      that.showFun();
    });
    eventBus.$on("addNum", function(val) {
      that.add(val);
    });
  },
  beforeUpdate() {},
  updated() {},

  methods: {
    showFun() {
      this.show = !this.show;
      this.number++;
    },

    add(val) {
      this.number1 = this.number1 + val;
    }
  }
};
</script>


<style scoped lang="scss">
</style>






