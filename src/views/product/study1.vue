
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="vue学习1" name="first">


          <el-button type="success" v-on:click="show = !show">动画切换</el-button>
          <transition name="didi">
            <p v-show="show" style="width:100px;height: 100px;background:green">hello</p>
          </transition>
          <hr>

          <el-button type="success" v-on:click="show1 = !show1">动画切换</el-button>
          <transition name="didi1">
            <p v-show="show1" style="width:100px;height: 100px;background:green">hello</p>
          </transition>
        
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../components/header";

// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "study1",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",
      show: true,
      show1: true,
    };
  },
  computed: {},

  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},

  methods: {}
};
</script>


<style scoped lang="scss">
hr {
    margin: 10px 0;
}
.didi-enter-active,
.didi-leave-active {
  transition: all 0.5s;
}
.didi-enter,
.didi-leave-to {
  opacity: 0;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.didi1-enter-active {
  transition: all .3s ease;
}
.didi1-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.didi1-enter, .didi1-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>






