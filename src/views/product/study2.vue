
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="vue学习2" name="first">
        <h1>自定义指令</h1>
        <br />
        <p>页面一加载聚焦输入框</p>
        <input type="text" v-focus />

        <hr />
        <h1>过滤器</h1>
        <div>
          <input type="text" v-model="value1" />
          <p>过滤器处理过的值(将小写字母转换成大写):</p>
          <strong>{{value1 | toUpperCaseFun}}</strong>
          <br />
          <p>串联过滤器,先执行toUpperCaseFun，再执行toLowerCaseFun</p>
          <strong>{{value1 | toUpperCaseFun | toLowerCaseFun}}</strong>
        </div>
        <hr />
        <h1>watch用法</h1>
        <br />
        <strong>监听值的变化(值变化，背景变红):</strong>
        <input type="text" v-model="cityName" />
        <p ref="cityNameCon">{{cityName}}</p>
        <p>最新的值： {{newName}}</p>
        <p>上一次的值：{{oldName}}</p>
        <br />
        <p>
          当需要监听一个对象的改变时，普通的watch方法无法监听到对象内部属性的改变，只有data中的数据才能够监听到变化，此时就需要deep属性对对象进行深度监听。
          <br />数组（一维、多维）的变化不需要通过深度监听，对象数组中对象的属性变化则需要deep深度监听。
        </p>
        <strong>监听对象需要使用deep(值变化，背景变红):</strong>
        <input type="text" v-model="cityName1.name" />
        <p ref="cityNameCon1">{{cityName1.name}}</p>
        <br />
        <hr />
        <h1>Vue.nextTick()</h1>
        <p>数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。</p>
        <p>在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。</p>

        <div ref="msgDiv">{{msg}}</div>
        <div v-if="msg1">Message got outside $nextTick: {{msg1}}</div>
        <div v-if="msg2">Message got inside $nextTick: {{msg2}}</div>
        <div v-if="msg3">Message got outside $nextTick: {{msg3}}</div>
        <button @click="changeMsg">Change the Message</button>
        <br />
        <br />

        <p ref="myWidth" v-if="showMe">{{ message }}</p>
        <el-button type="success" @click="getMyWidth">获取p元素宽度</el-button>
        <br>
        <br>
        <el-button type="success" @click="showInputFun">点击按钮显示下面的输入框并且获取焦点</el-button>
        <br>
        <br>
        <input type="text" v-if="showInput" id="keywords">




        <!------------------------------------------------------------------>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../components/header";
// 混入 (mixin)
import commonMixin from "../../assets/js/commonMixin.js";

// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "study2",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",
      show: true,
      value1: "ad",
      cityName: "shanghai",
      newName: null,
      oldName: null,
      cityName1: { id: 1, name: "shanghai" },
      msg: "Hello Vue.",
      msg1: "",
      msg2: "",
      msg3: "",
      showMe: false,
      message: "迪迪",
      showInput: false
    };
  },
  // 自定义指令
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  // 过滤器
  filters: {
    // 转大写
    toUpperCaseFun: function(value) {
      return value.toUpperCase();
    },
    // 转小写
    toLowerCaseFun: function(value) {
      return value.toLowerCase();
    }
  },

  // 混入 (mixin)
  mixins: [commonMixin],
  computed: {},

  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},

  methods: {
    changeMsg() {
      this.msg = "Hello world.";
      this.msg1 = this.$refs.msgDiv.innerHTML;
      this.msg2 = this.$refs.msgDiv.innerHTML;
      this.$nextTick(() => {
        this.msg3 = this.$refs.msgDiv.innerHTML;
      });
    },

    getMyWidth() {
      // dom更新了
      this.showMe = true;
      //this.message = this.$refs.myWidth.offsetWidth;
      //报错 TypeError: this.$refs.myWidth is undefined
      this.$nextTick(() => {
        //dom元素更新后执行，此时能拿到p元素的属性
        this.message = this.$refs.myWidth.offsetWidth;
      });
    },
    showInputFun() {
      this.showInput = true;
      // this.$nextTick(function() {
      //   document.getElementById("keywords").focus();
      // });
      this.$nextTick(() => {
        document.getElementById("keywords").focus();
      })
    }
  },
  watch: {
    cityName: {
      handler(newName, oldName) {
        this.$refs.cityNameCon.style.backgroundColor = "red";
        this.newName = newName;
        this.oldName = oldName;
      }
      // 第一次绑定的时候也执行该方法(立即执行)
      // immediate: true
    },

    cityName1: {
      handler(newName, oldName) {
        this.$refs.cityNameCon1.style.backgroundColor = "red";
      },
      // 第一次绑定的时候也执行该方法(立即执行)
      // immediate: true
      // 监听对象
      deep: true
    }
  }
};
</script>


<style scoped lang="scss">
.content {
  padding-bottom: 200px;
}

/deep/ {
  .aa {
    background: red;
  }
}

hr,
div,
p {
  margin: 10px 0;
}
</style>





