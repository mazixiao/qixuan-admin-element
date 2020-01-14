
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

    <header>
      <el-scrollbar style="height: 100%;overflow-x:hidden">
        <el-menu 
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="vertical"
          :unique-opened="true"
          :default-openeds="openeds">
          <!-- 一级 -->
          <template v-for="item in menu" :select="item.label">
            <el-submenu :index="item.value" v-if="item.children && item.children.length" :key="item.label">
              <template slot="title">{{item.label}}</template>
              <!-- 二级 -->
              <template v-for="list in item.children">
                <el-submenu :index="list.value" v-if="list.children && list.children.length" :key="list.label"> 
                  <template slot="title">{{list.label}}</template>
                  <!-- 三级 -->
                  <el-menu-item v-for="list3 in list.children" :index="list3.value" :key="list3.label">{{list3.label}}</el-menu-item>
                </el-submenu>
                <!-- 二级无下拉 -->
                <el-menu-item v-else :index="list.value" :key="list.label">{{list.label}}</el-menu-item>  
              </template>
            </el-submenu>
            <!-- 一级无下拉 -->
            <el-menu-item v-else :index="item.value" :key="item.label">
              {{item.label}}
            </el-menu-item>
          </template>
        </el-menu>
      </el-scrollbar>


    </header>



      <el-menu 
        :default-active="activeIndex"
        class="el-menu-demo" mode="horizontal">
        <!-- 一级 -->
        <template v-for="item in menu" :select="item.label">
          <el-submenu :index="item.value" v-if="item.children && item.children.length" :key="item.label">
            <template slot="title">{{item.label}}</template>
            <!-- 二级 -->
            <template v-for="list in item.children">
              <el-submenu :index="list.value" v-if="list.children && list.children.length" :key="list.label"> 
                <template slot="title">{{list.label}}</template>
                <!-- 三级 -->
                <el-menu-item v-for="list3 in list.children" :index="list3.value" :key="list3.label">{{list3.label}}</el-menu-item>
              </el-submenu>
              <!-- 二级无下拉 -->
              <el-menu-item v-else :index="list.value" :key="list.label">{{list.label}}</el-menu-item>  
            </template>
          </el-submenu>
          <!-- 一级无下拉 -->
          <el-menu-item v-else :index="item.value" :key="item.label">
            {{item.label}}
          </el-menu-item>
        </template>
      </el-menu>


    <!-- Dropdown 下拉菜单 -->
    <el-dropdown @command="changeCity">
      <span class="el-dropdown-link">
        切换城市<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :command="item.label"
        >{{item.label}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>



     <el-menu
      default-active="1"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      
      <template v-for="item in list">
        <el-submenu v-if="item.children && item.children.length" :index="item.path" :key="item.path">
          <template slot="title"><i :class="item.icon"></i><span>{{item.name}}</span></template>
          
          <template v-for="itemChild in item.children">
            <el-submenu v-if="itemChild.children && itemChild.children.length" :index="itemChild.path" :key="itemChild.path">
                <template slot="title"><i :class="itemChild.icon"></i><span>{{itemChild.name}}</span></template>
                
                <el-menu-item v-for="itemChild_Child in itemChild.children" :index="itemChild_Child .path" :key="itemChild_Child.path">
                <i :class="itemChild_Child.icon"></i><span slot="title">{{itemChild_Child.name}}</span></el-menu-item>
            </el-submenu>
            
            <el-menu-item v-else :index="itemChild.path" :key="itemChild.path"><i :class="itemChild.icon"></i><span slot="title">{{itemChild.name}}</span></el-menu-item>
          </template>
        </el-submenu>
        
        <el-menu-item v-else :index="item.path" :key="item.path"><i :class="item.icon"></i><span slot="title">{{item.name}}</span></el-menu-item>
      </template>

    </el-menu>


    <el-breadcrumb style="padding-left: 300px" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>


  </div>
</template>


<script src='../assets/js/index.js'></script>






