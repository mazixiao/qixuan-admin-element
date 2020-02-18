
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane :label="activeName" name="first" v-once>
        <el-button type="success" v-on:click="show1 = !show1">动画切换</el-button>
        <transition name="didi1">
          <p v-show="show1" style="width:100px;height: 100px;background:green">hello</p>
        </transition>
        <hr />

        <h1>遍历对象</h1>
        <ul>
          <li v-for="(todo, index) in todos" :key="index">{{todo}}</li>
        </ul>
        <hr />
        <h1>v-model双向绑定</h1>
        <input type="text" v-model="inputValue" />
        <p>{{inputValue}}</p>
        <hr />
        <p v-html="Vhtml"></p>

        <el-button type="success" v-bind:disabled="didi">通过v-bind:disabled控制是否能点击</el-button>
        <hr />
        <h1>模板语法使用 JavaScript 表达式</h1>
        <p>number + 100: {{number + 100}}</p>
        <p>三元表达式"ok ? 'yes': 'no'"： {{ok ? 'yes': 'no'}}</p>
        <p>message.split(""): {{message.split("")}}</p>
        <p>message.split("").reverse(): {{message.split("").reverse()}}</p>
        <p>message.split("").reverse().join(""): {{message.split("").reverse().join("")}}</p>

        <div v-for="(key, value, i) in todos" :key="key">
          <div :id="'list' + i">根据元素的下标动态的添加id:{{'list' + i}}，v-bind:id="'list' + i"：{{key}}</div>
        </div>

        <el-button type="success" @[event]="doSomething">@[event]="doSomething"</el-button>

        <hr>
        <h1>计算属性computed</h1>
        <p>把“message.split("").reverse().join("")”这句话放到了<strong>计算属性（会有缓存）</strong>中赋给了messageComputed变量： 
          <span style="color: red">{{messageComputed}}</span>
        </p>
        <p>在mounted里面渲染的message1：{{message1}}</p>
        <p>在methods通 <strong>方法(不希望有缓存，请用方法来替代)</strong> 过message2：{{messageMethods()}}</p>

        <hr>
        <h1>侦听属性watch</h1>
        <p>{{ fullName }}</p>
        <p>{{ lastName }}</p>
        <!------------------------------------------------------------------>
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
      todos: {
        text1: "被遍历的对象1",
        text2: "被遍历的对象2",
        text3: "被遍历的对象3"
      },
      inputValue: "双向绑定",
      Vhtml: "<span style='color: red'>我是通过v-html渲染的元素</span>",
      didi: true,
      number: 100,
      ok: true,
      message: "我是信息",
      message1: "我是信息1",
      message2: "我是信息2",
      event: "click",

      firstName: 'Fooo',
      lastName: 'Bar',
      fullName: 'Foo Bar'

      
    };
  },
  computed: {
    messageComputed() {
      return this.message.split("").reverse().join("")
    }
  },

  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
    this.message1 = this.message1.split("").reverse().join("");
  },
  beforeUpdate() {},
  updated() {},

  methods: {
    doSomething() {
      alert(1);
      this.event = "mouseover";
      //  alert("鼠标移入");
    },
    messageMethods() {
      return this.message2.split("").reverse().join("")
    }
  },
  watch: {


      // firstName: 'Foo',
      // lastName: 'Bar',
      // fullName: 'Foo Bar'

    firstName() {
      this.fullName = "迪迪";
    },
    lastName() {
      this.fullName = this.firstName + ' ' + val
    }

  }
};
</script>


<style scoped lang="scss">
.content {
    padding-bottom: 200px;
}

hr {
  margin: 10px 0;
}

/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.didi1-enter-active {
  transition: all 0.3s ease;
}
.didi1-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.didi1-enter, .didi1-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>






