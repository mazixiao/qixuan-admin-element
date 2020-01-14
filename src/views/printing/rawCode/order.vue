
<template>
  <div class="content">
    <commonHeader></commonHeader>
    生码订单测试
  </div>
</template>


<script>
import commonHeader from '../../../components/header'



export default {
  name: "printingRawCodeOrde",
  components: {
      commonHeader
  },
  data() {
    return {
      // 导航默认高亮
      activeIndex: "2-1-1",

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






