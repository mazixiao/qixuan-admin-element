
<template>
  <div class="content">
    <commonHeader>
      <h5 style="background: red">插槽带过来的内容</h5>
    </commonHeader>
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
          <hr />

          <input type="text" value="啦啦啦啦" />

          <div ref="didi">{{didi}}</div>
          <div v-for="(item, index) in arr" :key="item">{{index}}{{item}}</div>
          <div v-for="(item, index) in obj" :key="item">{{index}}: {{item}}</div>
          <p>{{1==3 ? "true": "false"}}</p>

          <button @click="lala($event)">按钮点击{{didi}}</button>

          <input type="checkbox" value="贝贝" name id v-model="checked1" />
          <input type="checkbox" value="静静" name id v-model="checked1" />
          <input type="checkbox" value="欢欢" name id v-model="checked1" />
          <div v-show="checked1">{{checked1}}</div>

          <test1 title="组件1使用props传过来的静态值" :content="propsContent"  :show="propsShow">
            <h2 style="background: red">slot插槽组件1组件1组件1</h2>
            <el-button type="success" @click="checkPropsContent">点击</el-button>
            <el-button type="success" @click="propsShowFun()">显示和隐藏绿色背景</el-button>
          </test1>
          <!-- <h2>接收组件1的props值</h2> -->
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../components/header";
import test1 from "../../components/test1";
import { mapState, mapActions, mapGetters } from "vuex";

export default {
  name: "product",
  components: {
    commonHeader,
    test1
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",
      didi: 0,
      arr: [1, 2, 3, 4],
      obj: {
        "11": 111,
        "22": 222,
        "33": 333
      },
      checked1: ["欢欢"],
      propsContent: 0,
      propsShow: true
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

  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
    // this.lala();
  },
  beforeUpdate() {},
  updated() {},

  methods: {
    aa() {
      return "1";
    },
    lala(e) {
      this.didi++;
      console.log(e);
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
    propsShowFun() {
      this.propsShow = !this.propsShow;
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






