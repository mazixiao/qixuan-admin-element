
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="mock模拟数据学习" name="first">
        <div v-for="item in ajaxDate" :key="item">{{item.Address}}</div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../components/header";

export default {
  name: "mock",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",
      ajaxDate: []
    };
  },
  computed: {},

  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
    var url = "/data/index";
    this.$axios
      .get(url)
      .then(response => {
        this.ajaxDate = response.data;
        console.log(this.ajaxDate, "responseresponse");
      })
      .catch(error => {});
  },
  beforeUpdate() {},
  updated() {},

  methods: {
    aa() {
      return "1";
    },
    lala(e) {
      this.didi++;
      console.log(this.$refs.didi.innerHTML, "通过this.$refs获取元素的内容");
    },
    add() {
      this.$store.commit("add", {
        num: 10
      });
    },
    reduce() {
      this.$store.commit("reduce");
    },

    checkPropsContent() {
      this.propsContent++;
    },
    // prop组件通信
    propsShowFun() {
      this.propsShow = !this.propsShow;
    },
    // ref组件通信
    checkchildIsShow() {
      this.$refs.childIsShow.closeGreen();
    },
    // $emit()子组件向父组件通信
    controlChildShowFun() {
      this.controlChildShow = !this.controlChildShow;
    },
    // $emit()子组件向父组件通信
    addNumberFun(num) {
      this.emitNumber = this.emitNumber + num;
    },

    checkParentCon(e) {
      this.parentCon = e;
    }

    // add1() {
    //   // dispatch  派遣
    //   this.$store.dispatch("add1");
    // },
    // reduce1() {
    //   this.$store.dispatch("reduce1");
    // },

    // 上面注释的简写
    // ...mapActions({
    //   add1: "add1",
    //   reduce1: "reduce1"
    // })
  }
};
</script>


<style scoped lang="scss">
</style>






