
<template>
  <div style="border: 1px solid green;padding: 10px;margin:10px">
    <h1>组件通信方式(vuex2)</h1>
    <hr>
    <el-button type="success" @click="subNum">使用vuex改变数值减值</el-button>
  </div>
</template>


<script>
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "vuex2",
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
      count() {
          return this.$store.state.count
      }
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {

  },
  beforeUpdate() {},
  updated() {},

  methods: {
      subNum() {
          this.$store.commit("subNum");
      }
  }
};
</script>


<style scoped lang="scss">
</style>






