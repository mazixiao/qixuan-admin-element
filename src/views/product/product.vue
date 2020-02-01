
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="生产管理" name="first">
        <div>
          <p>mutations 操作:</p>
          <p>直接获取的值: {{this.$store.state.count}}</p>
          <p>从getters获取计算后的值: {{this.$store.getters.getStateCount}}</p>
          <p>从computed获取的值: {{count}}</p>

          <p>
            <button @click="add">+</button>
            <button @click="reduce">-</button>
          </p>
        </div>

        <br />
        <br />
        <br />

        <div>
          <p>Action 操作:</p>
          <p>直接获取的值: {{this.$store.state.count1}}</p>
          <p>从getters获取计算后的值: {{this.$store.getters.getStateCount1}}</p>
          <p>从computed获取的值: {{count1}}</p>

          <p>
            <button @click="add1">+</button>
            <button @click="reduce1">-</button>
          </p>
        </div>
        <br />
        <br />
        <br />
        <div>
          <!-- {{count2}} -->
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../components/header";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "product",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first"
    };
  },
  computed: {
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

  created() {},

  methods: {
    add() {
      this.$store.commit("add", {
        num: 10
      });
    },
    reduce() {
      this.$store.commit("reduce");
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






