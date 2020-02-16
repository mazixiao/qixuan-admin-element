
<template>
  <div>
    <h1>组件通信方式2(ref, 父组件向子组件通信)</h1>
    <el-button @click="closeGreen()" type="primary"><i class="el-icon-close"></i>子组件内部元素控制绿框</el-button>
    <div v-show="show" style="width:100px;height: 100px;background:green">父组件控制是否显示该绿框</div>
    <h3 style="color: red">{{childCon}}</h3>
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "testRef",
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
        childCon: "我是子组件的内容",
    };
  },
  computed: {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},

  methods: {
      closeGreen() {
          this.show = !this.show;
      }
  }
};
</script>


<style scoped lang="scss">
</style>






