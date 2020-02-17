
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="生产管理" name="first">
        <vuex1></vuex1>
        <vuex2></vuex2>
        <el-button type="success" @click="addNum">内部通过事件控制绿框加值</el-button>
        <el-button type="success" @click="subNum">内部通过事件控制绿框减值</el-button>
        <div :class="{opacityHidden: showGreen, styles: true}"></div>
        <hr />
        <p>state里面的初始值：{{count1}}</p>
        <p>
          getters对象里面处理过的值:
          <strong>{{getStateCount}}</strong> (count1 + 1000)
        </p>
        <p>vuex里的初始值也可以直接在data里面接收：{{didi}}</p>

        <el-button type="success" @click="count2Fun1">vuex通过mutations同步事件传参渲染count2的值:{{count2}}</el-button>

        <hr />
        <h1>异步actions的操作</h1>
        <el-button type="success" @click="add1">vuex通过actions异步事件传参渲染count3的值:{{count3}}</el-button>
        <el-button type="success" @click="reduce1">vuex通过actions异步事件传参渲染count4的值:{{count4}}</el-button>




      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../components/header";
import vuex1 from "../../components/vuex1";
import vuex2 from "../../components/vuex2";
// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

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
      activeName: "first",
      didi: this.$store.getters.getStateCount,
    };
  },
  computed: {
    // // 写法1
    // 直接获取state里面的初始值
    // showGreen() {
    //   return this.$store.state.showGreen;
    // },

    // // 获取getters里面的数据
    // getStateCount() {
    //   return this.$store.getters.getStateCount;
    // },

    // // 写法2
    // ...mapState({
    //   // showGreen: state => state.showGreen
    //   showGreen: (state)=> {
    //     return state.showGreen;
    //   },
    // }),

    // 写法3, 上面注释的简写(2种方式)
    ...mapState(["count1",  "count2", "count3", "count4", "showGreen", "number"]),
    ...mapGetters(["getStateCount", "getStateCount1"])
  },

  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},

  methods: {
    // 写法1
    // subNum() {
    //   this.$store.commit("subNum");
    // },

    // 写法2
    subNum() {
      this.$store.commit({
        type: "subNum"
      });
    },

    // // 传参写法
    // count2Fun() {
    //   this.$store.commit({
    //     type: "count2Fun",
    //     num: 10,
    //   })
    // },

    count2Fun1() {
      //调用 ...mapMutations(['addNum', "count2Fun"])里的方法
      // 意思是把 mutations 的方法 写到你当前组件的this中，你在组件内就可以直接通过 this.xxx 来找到这个Mutation方法
      this.count2Fun({num: 10});
    },

    // addNum() {
    //     this.$store.commit("addNum");
    // },

    // 上面注释的简写
    // ...mapMutations({
    //   addNum: "addNum",
    //   count2Fun: "count2Fun"
    // })
    // 同步方法映射的简写
    ...mapMutations(['addNum', "count2Fun"]),

// /----------------------------------------
    // 异步方法actions
    // add1() {
    //   this.$store.dispatch('add1')
    // },

    // reduce1() {
    //   this.$store.dispatch({
    //     type: 'reduce1',
    //   })
    // },
    
    // 异步方法映射的简写
    ...mapActions(["add1", "reduce1"]),


  }
};
</script>


<style scoped lang="scss">
.opacityHidden {
  opacity: 0.5;
  transition: all 0.3s;
}
.styles {
  width: 100px;
  height: 100px;
  background: green;
}
</style>






