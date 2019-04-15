
<style lang="sass">  
  @import '../assets/scss/index.scss';
</style>



<template>
  <div class="hello">
  {{msg}}

    <el-carousel :interval="4000" type="card" height="200px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
    </el-carousel>


    <el-button>默认按钮</el-button>
    <el-button type="primary">主要按钮</el-button>
    <el-button type="text">文字按钮</el-button>


  </div>
</template>


<script src='../assets/js/index.js'></script>




