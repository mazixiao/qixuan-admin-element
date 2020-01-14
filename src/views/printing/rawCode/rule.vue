
<template>
  <div class="content">
    <commonHeader></commonHeader>
    生码规则测试


    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>



  </div>
</template>


<script>
import commonHeader from '../../../components/header'



export default {
  name: "printingRawCodeRule",
  components: {
      commonHeader
  },
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''

    };
  },
  methods: {

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>


<style lang="scss">
a, a:focus, a:active, a:visited, a:focus-within {
  border: none;
  outline: none;
  color: transparent;
}


</style>






