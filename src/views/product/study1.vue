
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane :label="activeName" name="first">
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

        <hr />
        <h1>计算属性computed</h1>
        <p>
          把“message.split("").reverse().join("")”这句话放到了
          <strong>计算属性（会有缓存）</strong>中赋给了messageComputed变量：
          <span style="color: red">{{messageComputed}}</span>
        </p>
        <p>在mounted里面渲染的message1：{{message1}}</p>
        <p>
          在methods通
          <strong>方法(不希望有缓存，请用方法来替代)</strong>
          过message2：{{messageMethods()}}
        </p>

        <hr />
        <h1>Class 与 Style 绑定</h1>
        <p :class="{ active: style1Change, didi: true }">被computed（计算）过后的样式</p>
        <p :class="[{active: style1Change}]">当有多个class可以在数组语法中也可以使用对象语法</p>
        <br />
        <p>在组件中使用样式,红色和绿色背景</p>
        <testProp class="red"></testProp>
        <p
          :style="{color: color, fontSize: fontSize + 'px', fontWeight: fontWeight}"
        >动态渲染的style, style="{color: color, fontSize: fontSize + 'px', fontWeight: fontWeight"</p>
        <hr />

        <template v-if="ok">
          <h1>使用把一个 template 元素当做不可见的包裹元素件</h1>
        </template>

        <div v-if="Math.random() > 0.5">v-if="Math.random() > 0.5"能看见</div>
        <div v-else>v-else不能看见</div>
        <hr />
        <h1>循环</h1>
        <p>
          可以写: v-for="item of todos", 也可以写成v-for="item in todos",
          <br />可以用 of 替代 in 作为分隔符
        </p>
        <ul v-for="(item, key, index) of todos" :key="index">
          <li>下标：{{index}}， 键名：{{key}}， 键值：{{item}}</li>
        </ul>
        <br />
        <ul v-for="item in evenNumbers" :key="item + 'q'">
          <li>{{item}}</li>
        </ul>

        <p>组件上使用循环</p>
        <testProp v-for="item in 3" :key="item + 'qq'"></testProp>

        <input type="text" v-model="newTodoText" />
        <el-button type="success" @click="addNewTodo">添加</el-button>

        <ul>
          <!-- is="todo-item" 代指<todo-item></todo-item> -->
          <li
            v-for="(todoItem, index) in todos1"
            :key="todoItem.id"
            :titleCon="todoItem.title"
            is="todo-item"
            @removeFun="remove(index)"
          ></li>
        </ul>
        <!-- 也可以这样渲染(如下) -->
        <hr />
        <ul>
          <todo-item
            v-for="(todoItem, index) in todos1"
            :key="todoItem.id"
            :titleCon="todoItem.title"
            @removeFun="remove(index)"
          ></todo-item>
        </ul>

        <hr />
        <h1>事件</h1>
        <el-button type="success" @click="eventFun($event)">访问原始的 DOM 事件,传参 '$event'</el-button>
        <br />
        <br />
        <el-button type="success" @click="clickStop">
          阻止单击事件继续传播
          <el-button type="success" @click.stop="clickStop">阻止单击事件继续传播</el-button>
        </el-button>
        <br />
        <br />
        <form action @submit.prevent="onSubmit">
          <input type="text" />
          <br />v-on:submit.prevent ==》指在该表单中的任何提交按钮都可以触发该事件
          <br />
          <input type="submit" value="@submit.prevent提交事件不再重载页面" />
        </form>

        <br />
        <p>v-on:click.capture, .capture 冒泡顺序</p>
        <p>v-on:click.self, 即事件不是从内部元素触发的</p>
        <el-button type="success" @click="clickCapture('我是一级')">
          我是一级
          <el-button type="success" @click.self="clickCapture('我是二级')">
            我是二级(使用self不生效)
            <el-button type="success" @click="clickCapture('我是三级')">我是三级</el-button>
          </el-button>
        </el-button>
        <br />
        <br />按下enter才会触发事件
        <input v-on:keyup.enter="submit11()" />

        <br>
        <br>
        <!-- 有且只有 Ctrl 被按下的时候才触发 -->
        <el-button type="success" @click.ctrl.exact="onCtrlClick">按下ctrl且同时点击才会触发</el-button>

        <!------------------------------------------------------------------>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../components/header";
import testProp from "../../components/testProp";
import todoItem from "../../components/todo-item";

// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "study1",
  components: {
    commonHeader,
    testProp,
    todoItem
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

      firstName: "Fooo",
      lastName: "Bar",
      fullName: "Foo Bar",
      style1: false,
      color: "red",
      fontSize: "30",
      fontWeight: "bold",
      numbers: [1, 2, 3, 4, 5],
      todos1: [
        {
          id: 1,
          title: "Do the dishes"
        },
        {
          id: 2,
          title: "Take out the trash"
        },
        {
          id: 3,
          title: "Mow the lawn"
        }
      ],
      newTodoText: "",
      nextTodoId: 4
    };
  },
  computed: {
    messageComputed() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    style1Change() {
      return (this.style1 = true);
    },
    evenNumbers() {
      return this.numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  },

  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
    this.message1 = this.message1
      .split("")
      .reverse()
      .join("");
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
      return this.message2
        .split("")
        .reverse()
        .join("");
    },
    remove(index) {
      this.todos1.splice(index, 1);
    },
    addNewTodo() {
      this.todos1.push({
        id: this.nextTodoId++,
        title: this.newTodoText
      });
      this.newTodoText = "";
    },
    eventFun(event) {
      this.$alert(event.target.innerHTML, "标题名称", {
        confirmButtonText: "确定",
        callback: action => {}
      });
      console.log(event.target);
    },
    clickStop() {
      alert("阻止事件继续传播");
    },
    onSubmit() {
      alert(1);
    },
    clickCapture(con) {
      alert(con);
    },

    submit11() {
      alert("enter提交");
    },
    onCtrlClick() {
      alert("按下ctrl且同时点击");
    }
  },
  watch: {}
};
</script>


<style scoped lang="scss">
.content {
  padding-bottom: 200px;
}

/deep/ {
  .red {
    background-color: red;
    // transition: all 0.3s;
    transform: scale(1);
    h1 {
      background-color: green;
    }
  }
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






