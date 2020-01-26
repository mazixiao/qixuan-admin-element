
<template>
  <div class="content">
    <commonHeader></commonHeader>

    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="生码订单" name="first">
        <el-form class="layui-form1 clearfix" :gutter="20" :model="formArr">
          <el-col :span="6">
            <el-form-item label="生码企业">
              <el-select class="w100" v-model="formArr.select1" placeholder="请选择">
                <el-option label="5001-上海南极人服装有限公司" value="5001-上海南极人服装有限公司"></el-option>
                <el-option label="5001-上海南极人服装有限公司2" value="5001-上海南极人服装有限公司2"></el-option>
                <el-option label="release" value="release" disabled></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产品编号">
              <el-input v-model="formArr.input1" placeholder="产品编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="生码订单号">
              <el-input v-model="formArr.input2" placeholder="产品编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产品名称">
              <el-input v-model="formArr.input3" placeholder="产品编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产品名称">
              <el-select class="w100" v-model="formArr.select2" placeholder="请选择">
                <el-option label="5001-上海南极人服装有限公司" value="5001-上海南极人服装有限公司"></el-option>
                <el-option label="5001-上海南极人服装有限公司2" value="5001-上海南极人服装有限公司2"></el-option>
                <el-option label="release" value="release" disabled></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6" class="have-date">
            <el-form-item label="生码日期">
              <el-date-picker
                type="date"
                placeholder="开始日期"
                v-model="formArr.date1"
                style="width: 49%;"
              ></el-date-picker>
              <el-date-picker
                type="date"
                placeholder="结束日期"
                v-model="formArr.date2"
                style="width: 49%; float: right"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="客户订单号">
              <el-input v-model="formArr.input4" placeholder="产品编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="20" class="btns">
            <el-button type="primary">查询</el-button>
            <el-button type="success">导出</el-button>
          </el-col>
        </el-form>

        <router-link to="/printing/rawCode/orderAdd/123" class="added-page">
          <i class="el-icon-plus"></i>
          新增生码订单
        </router-link>


        <el-table
          stripe
          border
          style="width: 100%"
          max-height="none"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          :data="tableDataEnd"
        >
          <el-table-column prop="data1" label="订单号" width="160"></el-table-column>
          <el-table-column prop="data2" label="生码日期" width="110"></el-table-column>
          <el-table-column prop="data3" label="客户订单号" width="150"></el-table-column>
          <el-table-column prop="data4" label="企业简称" width="140"></el-table-column>
          <el-table-column prop="data5" label="企业名称" width="292"></el-table-column>
          <el-table-column prop="data6" label="生码类型" width="130"></el-table-column>
          <el-table-column prop="data7" label="产品型号" width="160"></el-table-column>
          <el-table-column prop="data8" label="产品名称" width="150"></el-table-column>
          <el-table-column prop="data8" label="批次号" width="120"></el-table-column>
          <el-table-column fixed="right" label="操作" width="140">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableDataBegin)"
                type="primary"
                size="mini"
              >
                <i class="el-icon-search"></i>
                抽检
              </el-button>
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableDataBegin)"
                type="primary"
                size="mini"
              >
                <i class="el-icon-download"></i>
                下载
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
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../../components/header";

export default {
  name: "printingRawCodeOrde",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",
      select: "5001-上海南极人服装有限公司",
      formArr: {
        select1: "5001-上海南极人服装有限公司",
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        select2: "",
        date1: "",
        date2: ""
      },
      tableDataEnd: [],
      // 默认展示页码
      currentPage: 1,
      // 一页展示多少条数据
      pageSize: 10,
      // 总共有多少条数据
      totalItems: 0,
      filterTableDataEnd: [],
      flag: false,
      tableDataBegin: [
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        },
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        },
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        },
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        },
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        },
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        },
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        },
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        },
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        },
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        },
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        },
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        },
        {
          data1: "C-A-190603001",
          data2: "2019.06.03",
          data3: "5001",
          data4: "SHNJ",
          data5: "上海南极人服装有限公司",
          data6: "套码",
          data7: "CP-2010",
          data8: "女童连衣"
        }
      ]
    };
  },
  created() {


    this.totalItems = this.tableDataBegin.length;
    if (this.totalItems > this.pageSize) {
      for (let index = 0; index < this.pageSize; index++) {
        this.tableDataEnd.push(this.tableDataBegin[index]);
      }
    } else {
      this.tableDataEnd = this.tableDataBegin;
    }
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
  padding: 15px;
  padding-right: 0;
  // padding-bottom: 0;
  margin: 0 !important;
}

.btns {
  display: block;
  width: 100%;
}

.added-page {
  margin-top: 30px;
}

/deep/ .el-form-item {
  width: 100%;
  margin-right: 0;
  padding-right: 20px;
  box-sizing: border-box;
  margin-bottom: 20px;
  label {
    display: block;
    text-align: left;
    line-height: 30px !important;
    float: none;
  }
  div {
    width: 100%;
  }
}

table {
  .el-button--mini,
  .el-button--mini.is-round {
    padding: 7px 3px;
  }
}
</style>






