
<template>
  <div class="content">
    <commonHeader></commonHeader>

    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="生码规则" name="first">
      新增客户生码规则

      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../../components/header";
export default {
  name: "printingRawCodeRuleAdd",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",


    };
  },

  created() {



  },

  methods: {

  }
};
</script>


<style scoped lang="scss">
.layui-form1 {
  border: 2px solid #ccc;
  padding-left: 44px;
  padding-right: 44px;
  padding-top: 20px;
  padding-bottom: 30px;
  margin-bottom: 40px;
}

.added {
  height: 80px;
  line-height: 80px;
  width: 100%;
  text-align: left;
  background-color: #e5effb;
  position: relative;
  padding: 30px;
  margin-bottom: 30px;
  border: none;
  font-size: 16px;
  position: relative;
  z-index: 1;
  color: #fff;
  display: block;
  &::before {
    position: absolute;
    content: "";
    width: 200px;
    height: 100%;
    background-color: #0064dc;
    left: 0;
    top: 0;
    z-index: -1;
  }
  &::after {
    position: absolute;
    content: "";
    width: 0;
    height: 0;
    left: 200px;
    top: 0;
    border-bottom: 77px solid #0064dc;
    border-right: 40px solid transparent;
    z-index: -1;
  }
  &:hover {
    color: #fff;
    background-color: #e5effb;
  }
}
</style>






