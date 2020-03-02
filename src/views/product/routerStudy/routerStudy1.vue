
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="路由学习1" name="first">
        <!-- <h1>自定义指令</h1> -->
        <br />

        <div>
          <el-button
            v-for="(item, index) in routers"
            :to="{path: item.url}"
            :key="index"
            type="success"
            @click="routerLink(item, index)"
            :class="[$route.meta.index === index ? 'red': '' ]"
          >点击跳转{{item.name}}</el-button>
        </div>

        <router-link
          :class="['link', $route.meta.index === index ? 'link-active': '' ]"
          v-for="(item, index) in routers"
          :to="{path: item.url}"
          :key="index"
        >{{item.name}}</router-link>

        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>

        <p>这个页面的其他内容</p>

        <!-- 模拟多选框 -->
        <!-- https://blog.csdn.net/a_grain_of_wheat/article/details/93159391 -->
        <div>
          <div
            @click="selectReason($event, index)"
            :class="selectArr.indexOf(index) != -1?'selectColor':''"
            v-for="(item, index) in peoples"
            :key="index"
          >
            <span v-if="selectArr.indexOf(index) != -1">被选中</span>
            <span v-else>点击选中</span>
            <strong>{{item}}</strong>
          </div>
        </div>

        <!------------------------------------------------------------------>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../../components/header";
import router1 from "./router1";
import router2 from "./router2";

// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "routerStudy1",
  components: {
    commonHeader,
    router1,
    router2
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",
      show: true,
      value1: "ad",
      routers: [
        {
          url: "/product/routerStudy/routerStudy1/router1",
          name: "路由组件1"
        },
        {
          url: "/product/routerStudy/routerStudy1/router2",
          name: "路由组件2"
        }
      ],
      peoples: ["迪迪", "乐乐", "果果"],
      selectArr: [],
      con: []
    };
  },
  // 自定义指令
  directives: {},
  // 过滤器
  filters: {},

  computed: {},

  created: function() {},

  beforeCreate() {},

  created() {},

  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},

  methods: {
    selectReason(event, index) {
      let indexItem = this.selectArr.indexOf(index);
      let item = event.currentTarget.querySelector("strong").innerHTML;
      if (indexItem == -1) {
        this.selectArr.push(index);
        this.con.push(item);
        console.log(this.con);
      } else {
        this.selectArr.splice(indexItem, 1);
        this.con.splice(indexItem, 1);
      }
    },
    routerLink(item, index) {
      this.$router.push(item.url)
    }
  },
  watch: {}
};
</script>


<style scoped lang="scss">
.content {
  padding-bottom: 200px;
}

.link {
  padding: 5px;
  margin: 5px;
}
.red {
  background-color: red;
}

.router-link-active,
.link-active {
  color: red;
}
.selectColor {
  strong {
    color: red;
  }
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

.transitionName-enter-active,
.transitionName-leave-active {
  transition: all 0.3s ease;
}

.transitionName-enter, .transitionName-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>





