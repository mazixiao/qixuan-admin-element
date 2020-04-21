<style lang="sass">
@import '../assets/scss/common.scss';
</style>

<template>
  <div :class="['commonCrumbs', 'content', {'active': isCollapse}]">
    <div class="commonCrumbs-con">
      <!-- <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>-->
      <el-breadcrumb class="app-breadcrumb" separator="/">
        <transition-group name="breadcrumb">
          <el-breadcrumb-item v-for="(item,index) in levelList" :key="item.path">
            <span
              v-if="item.redirect==='noRedirect'||index==levelList.length-1"
              class="no-redirect"
            >{{ item.meta.title }}</span>
            <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
          </el-breadcrumb-item>
        </transition-group>
      </el-breadcrumb>
    </div>
  </div>
</template>


<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import pathToRegexp from "path-to-regexp";
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
      show: true,
      levelList: null
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
    this.getBreadcrumb();
  },
  beforeUpdate() {},
  updated() {},
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.title
      );
      const first = matched[0];

      if (!this.isDashboard(first)) {
        matched = [{ path: "/dashboard", meta: { title: "Dashboard" } }].concat(
          matched
        );
      }

      this.levelList = matched.filter(
        item => item.meta && item.meta.title && item.meta.breadcrumb !== false
      );
    },
    isDashboard(route) {
      const name = route && route.name;
      if (!name) {
        return false;
      }
      return (
        name.trim().toLocaleLowerCase() === "Dashboard".toLocaleLowerCase()
      );
    },
    pathCompile(path) {
      // To solve this problem https://github.com/PanJiaChen/vue-element-admin/issues/561
      const { params } = this.$route;
      var toPath = pathToRegexp.compile(path);
      return toPath(params);
    },
    handleLink(item) {
      const { redirect, path } = item;
      if (redirect) {
        this.$router.push(redirect);
        return;
      }
      this.$router.push(this.pathCompile(path));
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

  // background: red;
  width: 100%;
  box-sizing: border-box;
  padding-top: 0;
  padding-bottom: 0;
  .commonCrumbs-con {
    padding-left: 60px;
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    height: 25px;
    line-height: 25px;
  }
}
</style>






