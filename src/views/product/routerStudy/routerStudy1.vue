
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
            @click="selectReason(item, index)"
            :class="selectArr.indexOf(item) != -1?'selectColor':''"
            v-for="(item, index) in peoples"
            :key="index"
          >
            <span v-if="selectArr.indexOf(item) != -1">被选中</span>
            <span v-else>点击选中</span>
            <strong>{{item}}</strong>
          </div>
          我选中了：{{selectArr}}
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
      selectArr: []
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
  mounted() {
    var arr = [11, 12, 13, 14, 15, 16, 17, 18];

    // arr.forEach(function(index, item) {
    //   // console.log(index);
    //   // console.log(item);
    // });

    // arr.map((index, item) => {
    //   // console.log(index);
    //   // console.log(item);
    // });


    // filter()：“过滤”功能，数组中的每一项运行给定函数，返回满足过滤条件组成的数组。
    var arr2 = arr.filter((item, index) => {
      return item % 3 === 0;
    });
    console.log(arr2);

    // every()：判断数组中每一项都是否满足条件，只有所有项都满足条件，才会返回true。
    var arr3 = arr.every(item => {
      return item > 1;
    });

    console.log(arr3);

    // some()：判断数组中是否存在满足条件的项，只要有一项满足条件，就会返回true。
    var arr4 = arr.some(item => {
      return item < 1;
    });
    console.log(arr4);

  arr.reduce((item, index)=> {
    console.log(item)
    console.log(index)
  })

// js遍历跳出循环
// https://blog.csdn.net/guxin_duyin/article/details/82980062

  },
  beforeUpdate() {},
  updated() {},

  methods: {
    sortFun(value1, value2) {
      if (value1 < value2) {
        return -1;
      } else if (value1 > value2) {
        return 1;
      } else {
        return 0;
      }
    },

    selectReason(item, index) {
      let indexItem = this.selectArr.indexOf(item);
      if (indexItem == -1) {
        this.selectArr.push(item);
      } else {
        this.selectArr.splice(indexItem, 1);
      }
    },
    routerLink(item, index) {
      this.$router.push(item.url);
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





