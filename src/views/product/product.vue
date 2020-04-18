
<template>
  <div :class="['content', {'active': isCollapse}]">
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

          <div style="border: 1px solid red;padding: 10px;margin:10px">
            <el-button type="success" @click="checkPropsContent">点击加1</el-button>
            <el-button type="success" @click="propsShowFun()">显示和隐藏绿色背景</el-button>
            <testProp title="组件1使用props传过来的静态值" :content="propsContent" :show="propsShow">
              <h2 style="background: red">slot插槽组件1组件1组件1</h2>
            </testProp>
          </div>

          <div style="border: 1px solid red;padding: 10px;margin:10px">
            <el-button type="success" @click="checkchildIsShow">父组件通过ref控制绿框</el-button>
            <testRef ref="childIsShow"></testRef>
          </div>

          <div style="border: 1px solid red;padding: 10px;margin:10px">
            <el-button type="success" @click="controlChildShowFun">父组件通过事件控制绿框</el-button>
            <testEmit @getControlChildShowFun="controlChildShowFun" @GetCheckParentCon="checkParentCon" @getaddNumberFun="addNumberFun"></testEmit>
            <div v-show="controlChildShow" style="width:100px;height: 100px;background:green">子组件控制是否显示该绿框(绿框是父组件中的元素)</div>
            <h2>我是: <span style="color: red">{{parentCon}}</span></h2>
            <h2>我是子组件通过事件传参: <span style="color: red">{{emitNumber}}</span></h2>
          </div>


          <div style="border: 1px solid red;padding: 10px;margin:10px">
            <eventBus1></eventBus1>
            <eventBus2></eventBus2>
          </div>



          
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../components/header";
import testProp from "../../components/testProp";
import testRef from "../../components/testRef";
import testEmit from "../../components/testEmit";
import eventBus1 from "../../components/eventBus1";
import eventBus2 from "../../components/eventBus2";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "product",
  components: {
    commonHeader,
    testProp,
    testRef,
    testEmit,
    eventBus1,
    eventBus2,
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
      propsShow: true,
      controlChildShow: true,
      parentCon: '默认我是父组件中的内容',
      emitNumber: 0,
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
    ...mapState(["count", "count1", "isCollapse"]),
      // isCollapse() {
      //     return this.$store.state.isCollapse
      // },

  },



  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
    setTimeout(()=> {
      this.$refs.childIsShow.childCon = "3秒后父组件替换了‘我是子组件的内容’"
    }, 3000);
    console.log(this.$refs.childIsShow, 'this.$refs.childIsShow');
  },
  beforeUpdate() {},
  updated() {},

  methods: {
    aa() {
      return "1";
    },
    lala(e) {
      this.didi++;
      console.log(this.$refs.didi.innerHTML, '通过this.$refs获取元素的内容')
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
    },

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
    ...mapActions(["add1", "reduce1"])

  }
};
</script>


<style scoped lang="scss">
</style>






