<style lang="sass">
@import '../assets/scss/common.scss';
</style>

<template>
  <div :class="['commonCrumbs', 'content', {'active': isCollapse}]">
    <div class="commonCrumbs-con">
        我是可爱面包屑
        https://element.eleme.cn/#/zh-CN/component/breadcrumb#breadcrumb-item-attributes
        </div>
    
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "crumbs",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      show: true
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
    this.$emit("GetCheckParentCon", '子组件更改了"默认我是父组件中的内容"');
  },
  beforeUpdate() {},
  updated() {},

  methods: {
    closeGreen() {
      this.$emit("getControlChildShowFun");
    },
    addNumber() {
      this.$emit("getaddNumberFun", 10);
    }
  }
};
</script>


<style lang="scss">
.commonCrumbs {
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 1;
  // width: 200px;
  height: 30px;
  // background: red;
  width: 100%;
  box-sizing: border-box;
  padding-top: 0;
  padding-bottom: 0;
  .commonCrumbs-con {
    padding-left: 60px;
  }
}
</style>






