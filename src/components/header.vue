<style lang="sass">
@import '../assets/scss/common.scss';
</style>

<template>
  <div :class="['header', {'active': isCollapse}]">
    <crumbs></crumbs>
    <!-- <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>-->

    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-button
        v-if="!isCollapse"
        class="switch"
        type="success"
        @click="collapseStatus"
        size="mini"
      >点击收缩</el-button>
      <el-button v-else class="switch" type="success" @click="collapseStatus" size="mini">点击展开</el-button>
      <div class="logo-wrap">
        <img class="logo" src="../assets/img/logo.png" alt />
        <span>码+服务云平台</span>
      </div>

      <!-- :default-active="$route.path" -->
      <el-menu
        router
        :default-active="checkPath()"
        class="el-menu-demo"
        mode="vertical"
        :unique-opened="true"
        :default-openeds="openeds"
        :collapse="isCollapse"
      >
        <!-- 一级 -->
        <template v-for="item in menu" :select="item.label">
          <el-submenu
            :index="item.value"
            v-if="item.children && item.children.length"
            :key="item.label"
          >
            <template slot="title">
              <div class="img-wrap">
                <img :src="item.icon" alt />
              </div>
              {{item.label}}
            </template>
            <!-- 二级 -->
            <template v-for="list in item.children">
              <el-submenu
                :index="list.value"
                v-if="list.children && list.children.length"
                :key="list.label"
              >
                <template slot="title">{{list.label}}</template>
                <!-- 三级 -->
                <el-menu-item
                  v-for="list3 in list.children"
                  :index="list3.path"
                  :key="list3.label"
                >{{list3.label}}</el-menu-item>
              </el-submenu>
              <!-- 二级无下拉 -->
              <el-menu-item v-else :index="list.path" :key="list.label">{{list.label}}</el-menu-item>
            </template>
          </el-submenu>
          <!-- 一级无下拉 -->
          <el-menu-item v-else :index="item.path" :key="item.label">
            <div class="img-wrap">
              <img :src="item.icon" alt />
            </div>
            {{item.label}}
          </el-menu-item>
        </template>
      </el-menu>

      <div class="copyRight">
        <span class="copyRight-text">Copyright◎2019-2025</span>
        <a class="copyRight-link" href="javascript:;">上海齐炫信息科技有限公司</a>
      </div>
    </el-scrollbar>
  </div>
</template>


<script>
import icon1 from "../assets/img/nav-icon1.png";
import icon2 from "../assets/img/nav-icon2.png";
import icon3 from "../assets/img/nav-icon3.png";
import icon4 from "../assets/img/nav-icon4.png";
import icon5 from "../assets/img/nav-icon5.png";
import icon6 from "../assets/img/nav-icon6.png";
import icon7 from "../assets/img/nav-icon7.png";
import icon8 from "../assets/img/nav-icon8.png";

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import crumbs from "./crumbs";
export default {
  name: "commonHeader",
  components: {
    crumbs
  },
  props: {
    title99: {
      type: String,
      default: "迪迪"
    }
  },
  data() {
    return {
      // // // 导航默认高亮
      // activeIndex: "2-1-1",
      // // //   导航第二个默认展开
      // openeds: ["2", "2-1", "2-1-1"],

      // // 导航默认高亮
      activeIndex: "1",
      // //   导航第二个默认展开
      openeds: ["1", "1-1"],

      num: 0,

      // 导航默认高亮
      // activeIndex: "0",
      //   导航第二个默认展开
      // openeds: ["0"],

      menu: [
        // {
        //   value: "0",
        //   label: "首页",
        //   icon: icon1,
        //   path: "/"
        // },

        {
          value: "1",
          label: "概览",
          icon: icon1,
          children: [
            {
              value: "1-1",
              label: "订单数据分析",
              path: "/overview/orderForm"
            },
            {
              value: "1-2",
              label: "防伪数据分析",
              path: "/overview/user"
            }
          ]
        },
        {
          value: "2",
          label: "赋码印刷",
          icon: icon2,
          children: [
            {
              value: "2-1",
              label: "生码管理",
              children: [
                {
                  value: "2-1-1",
                  label: "生码规则",
                  path: "/printing/rawCode/rule"

                  //  path: `/printing/rawCode/rule/:${this.activeIndex}`,
                },
                // {
                //   value: "2-1-3",
                //   label: "新增客户生码规则",
                //   path: "/printing/rawCode/ruleAdd",
                //   hide: true
                // },

                {
                  value: "2-1-2",
                  label: "生码订单",
                  path: "/printing/rawCode/orde"
                }
              ]
            }
          ]
        },
        {
          value: "3",
          label: "学习vue",
          icon: icon3,

          children: [
            {
              value: "3-1",
              label: "普通组件通信",
              path: "/product/product"
            },
            {
              value: "3-2",
              label: "vuex组件通信",
              path: "/product/productVuex"
            },
            {
              value: "3-3",
              label: "vue学习1",
              path: "/product/study1"
            },
            {
              value: "3-4",
              label: "vue学习2",
              path: "/product/study2"
            },
            {
              value: "3-5",
              label: "学习路由",
              icon: icon3,
              children: [
                {
                  value: "3-5-1",
                  label: "学习路由1",
                  path: "/product/routerStudy/routerStudy1"
                },
                {
                  value: "3-5-2",
                  label: "命名视图学习",
                  path: "/product/routerStudy/namedView"
                }
              ]
            },
            {
              value: "3-6",
              label: "mock学习",
              path: "/product/mock"
            }
          ]
        },

        {
          value: "4",
          label: "ES6",
          icon: icon5,
          children: [
            {
              value: "4-1-1",
              label: "学习1",
              path: "/es6Study/study1"
            }
            // {
            //   value: "6-1-2",
            //   label: "工厂管理",
            //   path: "/basics/factoryManage"
            // },
          ]
        },

        {
          value: "5",
          label: "手机页面设置",
          icon: icon4,
          children: [
            {
              value: "5-1-1",
              label: "防伪页面管理",
              path: "/mobile/antiFake"
            }
            // {
            //   value: "5-1-2",
            //   label: "追溯页面管理"
            // },
            // {
            //   value: "5-1-3",
            //   label: "红包页面管理"
            // },
            // {
            //   value: "5-1-4",
            //   label: "积分商城页面设置"
            // },
            // {
            //   value: "5-1-5",
            //   label: "其他页面管理"
            // }
          ]
        },
        {
          value: "6",
          label: "基础设置",
          icon: icon5,
          children: [
            {
              value: "6-1-1",
              label: "企业管理",
              path: "/basics/firmManage"
            },
            {
              value: "6-1-2",
              label: "工厂管理",
              path: "/basics/factoryManage"
            },
            // {
            //   value: "6-1-3",
            //   label: "仓库站点管理"
            // },
            // {
            //   value: "6-1-4",
            //   label: "供应商管理"
            // },
            // {
            //   value: "6-1-5",
            //   label: "物料清单"
            // },
            {
              value: "6-1-6",
              label: "客户管理",
              path: "/basics/client"
            }
            // {
            //   value: "6-1-7",
            //   label: "产品BOM清单"
            // }
          ]
        }

        // {
        //   value: "6",
        //   label: "智能营销",
        //   icon: icon6,
        //   children: [
        //     {
        //       value: "6-1",
        //       label: "促销活动"
        //     },
        //     {
        //       value: "6-2",
        //       label: "积分商城",
        //       children: [
        //         {
        //           value: "6-1-1",
        //           label: "商品发布管理"
        //         },
        //         {
        //           value: "6-1-2",
        //           label: "商品交易管理"
        //         },
        //         {
        //           value: "6-1-3",
        //           label: "商品发货管理"
        //         },
        //         {
        //           value: "6-1-4",
        //           label: "仓库里的宝贝"
        //         }
        //       ]
        //     }
        //   ]
        // },
        // {
        //   value: "7",
        //   label: "物流追溯",
        //   icon: icon7,
        //   children: [
        //     {
        //       value: "7-1",
        //       label: "订单管理"
        //     },
        //     {
        //       value: "7-2",
        //       label: "收货管理",
        //       children: [
        //         {
        //           value: "7-2-1",
        //           label: "收货计划管理"
        //         },
        //         {
        //           value: "7-2-2",
        //           label: "新建收货计划"
        //         },
        //         {
        //           value: "7-2-3",
        //           label: "收货产品明细查询"
        //         },
        //         {
        //           value: "7-2-4",
        //           label: "收货条码明细查询"
        //         }
        //       ]
        //     },
        //     {
        //       value: "7-3",
        //       label: "库存管理",
        //       children: [
        //         {
        //           value: "7-3-1",
        //           label: "产品库存查询"
        //         },
        //         {
        //           value: "7-3-2",
        //           label: "条码库存查询"
        //         },
        //         {
        //           value: "7-3-3",
        //           label: "库存盘点"
        //         }
        //       ]
        //     }
        //   ]
        // },
        // {
        //   value: "8",
        //   label: "产品追溯",
        //   icon: icon8,
        //   children: [
        //     {
        //       value: "8-1",
        //       label: "防伪验证",
        //       children: [
        //         {
        //           value: "8-1-1",
        //           label: "防伪查询明细"
        //         }
        //       ]
        //     }
        //   ]
        // }
      ]
    };
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse;
    }
  },
  mounted() {
    // this.num = this.$rote.params.num,
    // console.log(this.num)
  },
  methods: {
    collapseStatus() {
      this.$store.commit("collapseStatus");
    },

    // collapseStatus() {
    //   // this.collapseBtnClick = this.isCollapse;
    //   this.isCollapse = !this.isCollapse;
    //   if (this.isCollapse) {
    //     document.querySelector(".content").style.paddingLeft = "100px";
    //   } else {
    //     document.querySelector(".content").style.paddingLeft = "220px";
    //   }
    // },

    handleSelect(key, keyPath) {},

    changeCity(v) {
      console.log(v);
    },
    checkPath() {
      if (this.$route.path == "/printing/rawCode/ruleAdd/123") {
        return "/printing/rawCode/rule";
      } else if (this.$route.path == "/printing/rawCode/orderAdd/123") {
        return "/printing/rawCode/orde";
      } else if (
        this.$route.path == "/product/routerStudy/routerStudy1/router1" ||
        this.$route.path == "/product/routerStudy/routerStudy1/router2/1111"
      ) {
        return "/product/routerStudy/routerStudy1";
      }
      return this.$route.path;
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style lang="scss">
.header {
.el-scrollbar {
  height: 100%;
  z-index: 10;
  .el-scrollbar__wrap {
    overflow-x: hidden;
  }
}
}



.switch {
  position: absolute;
  right: 0;
  top: 0;
}

.header {
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  width: 220px;
  height: 100vh;
  overflow-y: auto;
  // border-right: 1px solid #ccc;
  background-image: url(../assets/img/nav-bg.jpg);
  background-repeat: no-repeat;
  background-position: 0 bottom;
  background-size: 100% auto;
  background-color: #001e67;
  transition: all 0.3s;
  &.active {
    width: 100px;
  }

  .img-wrap {
    display: inline-block;
    vertical-align: middle;
    width: 14px;
    height: 50px;
    line-height: 45px;
    margin-right: 2px;
    img {
      width: 100%;
    }
  }

  .logo-wrap {
    text-align: center;
    display: block;
    // background-color: red;
    padding-top: 50px;
    img {
      width: 82px;
    }
    span {
      margin-top: 10px;
      margin-bottom: 20px;
      color: #fff;
      font-size: 14px;
      display: block;
    }
  }

  .el-menu {
    background-color: transparent;
    border-right: none;
    text-align: left;
  }
  .el-submenu__title {
    color: #fff;
    i {
      color: #fff;
    }
    &:hover {
      background-color: #004fae;
    }
  }

  .el-menu-item {
    color: #fff;
    &:focus,
    &:hover {
      background-color: #004fae;
    }
    &.is-active {
      background-color: #004fae;
    }
  }

  .copyRight {
    padding-left: 29px;
    padding-right: 10px;
    padding-top: 50px;
    padding-bottom: 20px;
    text-align: left;
    .copyRight-text {
      display: inline-block;
      font-size: 12px;
      line-height: 24px;
      color: #fff;
    }
    .copyRight-link {
      display: inline-block;
      font-size: 12px;
      line-height: 24px;
      color: #fff;
    }
  }
}
</style>






