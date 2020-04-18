
<template>
  <div :class="['content', {'active': isCollapse}]">
    <commonHeader></commonHeader>

    <el-tabs v-model="activeName" @tab-click="handleClick" class="common-tab">
      <el-tab-pane label="生码规则" name="first">
        <el-row type="flex" justify="space-between" align="bottom" class="layui-form1">
          <el-col :span="8">
            <label class="small-tit">生码规则内容</label>
            <el-select class="w100" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <div class="btns">
            <el-button type="primary">查询</el-button>
            <el-button type="success">导出</el-button>
          </div>
        </el-row>

        <!-- <el-button class="added">
          <i class="el-icon-plus"></i>
          新增客户生码规则
        </el-button> -->


        <router-link to="/printing/rawCode/ruleAdd/123" class="added-page">
          <i class="el-icon-plus"></i>
          新增客户生码规则
        </router-link>

        <el-table
          stripe
          border
          style="width: 100%"
          max-height="none"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          :data="tableDataEnd"
        >
          <el-table-column prop="data1" label="企业代码" width="111"></el-table-column>
          <el-table-column prop="data2" label="企业简称" width="181"></el-table-column>
          <el-table-column prop="data3" label="企业名称" width="333"></el-table-column>
          <el-table-column prop="data4" label="规则编号" width="180"></el-table-column>
          <el-table-column prop="data5" label="类别" width="170"></el-table-column>
          <el-table-column prop="data6" label="规则名称" width="200"></el-table-column>
          <el-table-column prop="data7" label="包装级别" width="110"></el-table-column>
          <el-table-column prop="data8" label="包装数量" width="180"></el-table-column>
          <el-table-column fixed="right" label="操作" width="88">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableDataBegin)"
                type="primary"
                size="mini"
              >
                <i class="el-icon-edit-outline"></i>
                编辑
              </el-button>
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          background
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalItems"
        ></el-pagination>
      </el-tab-pane>


      <!-- <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane> -->


    </el-tabs>
<!-- <router-view></router-view> -->

  </div>


</template>


<script>
import commonHeader from "../../../components/header";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "printingRawCodeRule",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",

      options: [
        {
          value: "选项1",
          label: "5001-上海南极人服装有限公司"
        },
        {
          value: "选项2",
          label: "5001-上海南极人服装有限公司2"
        }
      ],
      value: "选项1",

      tableDataEnd: [],
      // 默认展示页码
      currentPage: 1,
      // 一页展示多少条数据
      pageSize: 10,
      // 总共有多少条数据
      totalItems: 0,
      filterTableDataEnd: [],
      flag: false,

      aa: {},

      tableDataBegin0: [
        {
          data1: "E01",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        },
        {
          data1: "E02",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        },
        {
          data1: "E03",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        },
        {
          data1: "E04",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        },
        {
          data1: "E05",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        },
        {
          data1: "E06",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        },
        {
          data1: "E07",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        },
        {
          data1: "E08",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        },
        {
          data1: "E09",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        },
        {
          data1: "E010",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        },
        {
          data1: "E11",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        },
        {
          data1: "E12",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        },
        {
          data1: "E13",
          data2: "上海南极人",
          data3: "上海南极人服装有限公司",
          data4: "E01CG00001",
          data5: "套码",
          data6: "男士服装套码",
          data7: "3",
          data8: "1箱/6盒/24件"
        }
      ]
    };
  },

  computed: {
      isCollapse() {
          return this.$store.state.isCollapse
      },
  },

  created() {
    // 这里就是刚才的config/index.js中的/api
    var urlItem =
      "http://yapi.demo.qunar.com/mock/78086/qixuan-admin-element-test";
    this.$axios
      .get(urlItem)
      .then(response => {
        //使用箭头函数防止this为undefined

        //  console.log(this.tableDataBegin);

        this.tableDataBegin = response.data.tableDataBegin1;

        // console.log(this.tableDataBegin);

        this.totalItems = this.tableDataBegin.length;
        if (this.totalItems > this.pageSize) {
          for (let index = 0; index < this.pageSize; index++) {
            this.tableDataEnd.push(this.tableDataBegin[index]);
          }
        } else {
          this.tableDataEnd = this.tableDataBegin;
        }
      })
      .catch(error => {
        // console.log(error);
        // alert(error);
      });

    // var pageToken = 1;
    // // 这里就是刚才的config/index.js中的/api
    // var urlItem  = '/api/news/qihoo?kw=%E7%99%BD&pageToken=' + pageToken + '&site=qq.com&apikey=WyPef4FMI79FqgPyB6zbdhhDxNyLTnn2MX4d1cJUHRi3G0UpefWIfwb5fqfDBQfw';
    // this.$axios.get(urlItem)
    // .then((response) => { //使用箭头函数防止this为undefined
    //   console.log(response.data.data);
    // })
    // .catch((error) => {
    //   // console.log(error);
    //   // alert(error);
    // });

    // // 这里就是刚才的config/index.js中的/api
    // var urlItem  = 'http://yapi.demo.qunar.com/mock/78086/qixuan-admin-element-test';
    // this.$axios.get(urlItem)
    // .then((response) => { //使用箭头函数防止this为undefined

    //   // this.tableDataBegin = JSON.parse(response.data);
    //   //  console.log(this.tableDataBegin);
    //    console.log(response);
    // })
    // .catch((error) => {
    //   // console.log(error);
    //   // alert(error);
    // });
  },



  methods: {
    deleteRow(index, rows) {
      // rows.splice(index, 1);
    },

    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, "tab");
      console.log(event, "event");
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageSize = val;
      this.handleCurrentChange(1);
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
      //需要判断是否检索
      if (!this.flag) {
        this.currentChangePage(this.tableDataBegin);
        // console.log(this.tableDataEnd);
      } else {
        this.currentChangePage(this.filterTableDataEnd);
        // console.log(this.tableDataEnd);
      }
    }, //组件自带监控当前页码

    currentChangePage(list) {
      let from = (this.currentPage - 1) * this.pageSize;
      let to = this.currentPage * this.pageSize;
      this.tableDataEnd = [];
      for (; from < to; from++) {
        if (list[from]) {
          this.tableDataEnd.push(list[from]);
        }
      }
    }
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





</style>






