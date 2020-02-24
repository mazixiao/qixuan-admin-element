
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="vue学习1" name="first">
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

        <br />
        <br />
        <!-- 有且只有 Ctrl 被按下的时候才触发 -->
        <el-button type="success" @click.ctrl.exact="onCtrlClick">按下ctrl且同时点击才会触发</el-button>

        <hr />
        <h1>表单输入绑定</h1>
        <h3>v-model 会忽略所有表单元素的 value、checked、selected attribute 的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。</h3>
        <input type="text" value="迪迪" v-model="value1" />
        <p>{{value1}}</p>

        <textarea name id cols="30" rows="10" v-model="value2"></textarea>
        <p>textarea的值：{{value2}}</p>

        <p>
          复选框
          <br />
          <input type="checkbox" v-model="value3" />
          {{value3}}
        </p>

        <div>
          <input type="checkbox" value="11" id="value1_1" v-model="checkedNames" />
          <label for="value1_1">11</label>
          <input type="checkbox" value="22" id="value2_2" v-model="checkedNames" />
          <label for="value2_2">22</label>
          <input type="checkbox" value="33" id="value3_3" v-model="checkedNames" />
          <label for="value3_3">33</label>
          <p v-if="checkedNames.length != 0">选择了：{{checkedNames}}</p>
        </div>

        <div>
          <br />单选框
          <br />
          <input type="radio" name="didi" value="one" v-model="picked" />
          <input type="radio" name="didi" value="two" v-model="picked" />
          <span>单选框内容: {{picked}}</span>
        </div>

        <div>
          <br />选择框select
          <br />
          <select name id v-model="selected">
            <option value="迪迪">迪迪</option>
            <option value="乐乐">乐乐</option>
            <option value="果果">果果</option>
          </select>
          <p>选中的内容：{{selected}}</p>
          <br />

          <p>用 v-for 渲染的动态选项：</p>
          <select name id v-model="selected1">
            <option v-for="item in selectArray" :value="item.value" :key="item.value">{{item.text}}</option>
          </select>
          <p>选中的内容：{{selected1}}</p>
        </div>
        <br />如果想自动将用户的输入值转为数值类型，可以给 v-model 添加 number 修饰符：
        <br />
        <input v-model.number="ages" type="number" />
        <br />如果要自动过滤用户输入的首尾空白字符，可以给 v-model 添加 trim 修饰符：
        <input v-model.trim="msg" />
        <p>过滤首尾空白字符: {{msg}}</p>

        <hr />
        <h1>组件</h1>
        <p>这两种写法功能一致:</p>
        <custom-input :valueCon="searchText" @inputPerent="searchTextFun($event)"></custom-input>
        <custom-input :valueCon="searchText" @inputPerent="searchText = $event"></custom-input>
        <p>父组件接收的内容： {{searchText}}</p>

        <br />
        <hr />
        <h1>插槽</h1>
        <p>注意 v-slot 只能添加在 template标签上</p>
        <slotTest>
          <!-- <template v-slot:title>
            作为子组件的插槽中显示的内容(标题)
          </template>-->
          <!-- 简写 -->
          <template #title>作为子组件的插槽中显示的内容(标题)</template>
          <template #con>作为子组件的插槽中显示的内容(内容)</template>

          <!-- 作用域插槽 -->
          <template #con2="slotProps">作用域插槽: {{slotProps.userName.name1}}</template>
        </slotTest>

        <hr />
        <h1>动态组件</h1>
        <br />
        <el-button
          type="success"
          :class="{activeTab: currentTab === index}"
          @click="tabsFun(tab, index)"
          v-for="(tab, index) in tabs"
          :key="tab"
        >{{tab}}</el-button>
        <!-- <dynamic1></dynamic1>
        <dynamic2></dynamic2>
        <dynamic3></dynamic3>-->
        <!-- 三个组件被做成tab切换里的内容 -->
        <component :is="currentTabComponent"></component>
        <br />
        <h1>在动态组件上使用 keep-alive</h1>
        <p>当在这些组件之间切换的时候，你有时会想保持这些组件的状态，以避免反复重渲染导致的性能问题。</p>
        <br />
        <el-button
          type="success"
          :class="{activeTab: currentTabkeepAlive === index}"
          @click="tabskeepAliveFun(tab, index)"
          v-for="(tab, index) in tabskeepAlive"
          :key="tab"
        >{{tab}}</el-button>
        <br />
        <br />
        <!-- 失活的组件将会被缓存！ -->
        <keep-alive>
          <!-- 三个组件被做成tab切换里的内容 -->
            <component :is="currentTabComponentkeepAlive"></component>
        </keep-alive>
        <br>

        <hr>
        <h1>混入 (mixin)</h1>
        <p>我是从commonMixin.js传过来的值：{{this.mixin1}}</p>
        <p>被计算过后的值： {{mixin1Con}}</p>
        <br>
        
        <p>
          同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
        </p>
        <!------------------------------------------------------------------>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../components/header";
import testProp from "../../components/testProp";
import todoItem from "../../components/todo-item";
import customInput from "../../components/custom-input";
import slotTest from "../../components/slot-test";
// 动态组件
import dynamic1 from "../../components/dynamic/dynamic1";
import dynamic2 from "../../components/dynamic/dynamic2";
import dynamic3 from "../../components/dynamic/dynamic3";
// 动态组件(keep-alive)
import keepAlive1 from "../../components/keepAlive/keepAlive1";
import keepAlive2 from "../../components/keepAlive/keepAlive2";
import keepAlive3 from "../../components/keepAlive/keepAlive3";
// 混入 (mixin)
import commonMixin from "../../assets/js/commonMixin.js";

// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "study1",
  components: {
    commonHeader,
    testProp,
    todoItem,
    customInput,
    slotTest,
    dynamic1,
    dynamic2,
    dynamic3,
    keepAlive1,
    keepAlive2,
    keepAlive3
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
      nextTodoId: 4,
      value1: "乐乐",
      value2: "乐乐",
      value3: false,
      checkedNames: [],
      picked: "one",
      selected: "迪迪",
      selected1: "迪迪",
      selectArray: [
        {
          text: "迪迪",
          value: "迪迪"
        },
        {
          text: "乐乐",
          value: "乐乐"
        },
        {
          text: "果果",
          value: "果果"
        }
      ],
      ages: "10",
      msg: "",
      searchText: "乐乐",
      con2222: {
        firstName: "乐乐"
      },
      currentTab: 0,
      tabs: ["tab1", "tab2", "tab3"],
      currentTabkeepAlive: 0,
      tabskeepAlive: ["tabskeepAlive1", "tabskeepAlive2", "tabskeepAlive3"]
    };
  },
  // 混入 (mixin)
  mixins:[commonMixin],
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
    },
    // 动态组件
    currentTabComponent() {
      let currentTabPlus = this.currentTab + 1;
      return "dynamic" + currentTabPlus;
    },
    // 动态组件(keep-alive)
    currentTabComponentkeepAlive() {
      let currentTabPlus = this.currentTabkeepAlive + 1;
      return "keepAlive" + currentTabPlus;
    },
    mixin1Con() {
      return this.mixin1 + 100;
    }
  },

  created: function() {
    console.log('组件钩子被调用');
  },

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {
    this.message1 = this.message1.split("").reverse().join("");
    // 调用commonMixin.js里的方法
    this.sayHello();
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
    },
    searchTextFun(e) {
      this.searchText = e;
    },
    tabsFun(tab, index) {
      this.currentTab = index;
    },
    tabskeepAliveFun(tab, index) {
      this.currentTabkeepAlive = index;
    },


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

.activeTab {
  background-color: red;
}

.list-complete-item {
  transition: all 1s;
}
.list-complete-enter, .list-complete-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-complete-leave-active {
  position: absolute;
}

</style>






