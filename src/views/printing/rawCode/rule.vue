
<template>
  <div class="didi">
    
    生码规则测试
  </div>
</template>


<script>





export default {
  name: "printingRawCodeRule",
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






