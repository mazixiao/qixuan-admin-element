
<template>
  <div>
    <h1>组件通信方式3($emit, 子组件向父组件通信)</h1>
    <el-button @click="closeGreen()" type="primary"><i class="el-icon-close"></i>子组件控制父组件的绿框展示</el-button>
    
  </div>
</template>


<script>
import { mapState, mapActions, mapGetters } from "vuex";

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
      
  },
  beforeUpdate() {},
  updated() {},

  methods: {
      closeGreen() {
        //   this.show = !this.show;
        this.$emit("getControlChildShowFun")
      }
  }
};
</script>


<style scoped lang="scss">
</style>






