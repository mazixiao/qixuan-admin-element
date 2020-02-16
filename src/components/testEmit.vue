
<template>
  <div>
    <h1>组件通信方式3($emit, 子组件向父组件通信)</h1>
    <el-button @click="closeGreen()" type="primary"><i class="el-icon-close"></i>子组件控制父组件的绿框展示</el-button>
    <el-button @click="addNumber()" type="primary"><i class="el-icon-close"></i>子组件事件传值</el-button>
    
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "testEmit",
  components: {},
  props: {
      title: {
          type: String,
          default: ""
      },


  },
  data() {
    return {
        show: true,
    };
  },
  computed: {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
      this.$emit("GetCheckParentCon", '子组件更改了"默认我是父组件中的内容"')
  },
  beforeUpdate() {},
  updated() {},

  methods: {
      closeGreen() {
        this.$emit("getControlChildShowFun")
      },  
      addNumber() {
        this.$emit("getaddNumberFun", 10);
      }
  }
};
</script>


<style scoped lang="scss">
</style>






