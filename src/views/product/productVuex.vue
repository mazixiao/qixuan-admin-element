
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="生产管理" name="first">
        
        <vuex1></vuex1>
        <vuex2></vuex2>
        <el-button type="success" @click="subNum">内部通过事件控制绿框</el-button>
        <div v-if="showGreen"  style="width:100px;height: 100px;background:green"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../components/header";
import vuex1 from "../../components/vuex1";
import vuex2 from "../../components/vuex2";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "product",
  components: {
    commonHeader,
    vuex1,
    vuex2
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first"
    };
  },
  computed: {


      showGreen() {
           return this.$store.state.showGreen
      },

    // count() {
    //   return this.$store.state.count;
    // },
    // count1() {
    //   return this.$store.state.count1;
    // },

    // ...mapState({
    //   count: state => state.count,
    //   count1: state => state.count1
    // }),

    // 上面注释的简写(2种方式)
    ...mapState(["count", "count1"])
  },

  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},

  methods: {

      subNum() {
          this.$store.commit("subNum");
      },

    // add1() {
    //   // dispatch  派遣
    //   this.$store.dispatch("add1");
    // },
    // reduce1() {
    //   this.$store.dispatch("reduce1");
    // },

    // 上面注释的简写
    ...mapActions({
      add1: "add1",
      reduce1: "reduce1"
    })
  }
};
</script>


<style scoped lang="scss">
</style>






