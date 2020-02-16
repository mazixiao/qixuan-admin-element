
<template>
  <div style="border: 1px solid green;padding: 10px;margin:10px">
    <h1>组件通信方式(vuex1)</h1>
    <hr>
    <h3>{{text1}}</h3>
    <el-button type="success" @click="addNum">内部通过事件控制绿框</el-button>
    <h4>使用vuex改变数值加值{{count}}</h4>
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "vuex1",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
      text1() {
          return this.$store.state.text1
      },
      count() {
          return this.$store.state.count
      },


  },

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {

  },
  beforeUpdate() {},
  updated() {},

  methods: {
      addNum() {
          this.$store.commit("addNum");
      }
  }
};
</script>


<style scoped lang="scss">
</style>






