
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="新增生码订单" name="first">
        <el-form class="layui-form1 clearfix" :gutter="20" :model="formArr">
          <el-col :span="6">
            <el-form-item label="*生码企业">
              <el-select class="w100" v-model="formArr.select1" placeholder="*生码企业">
                <el-option label="5001-上海南极人服装有限公司" value="5001-上海南极人服装有限公司"></el-option>
                <el-option label="5001-上海南极人服装有限公司2" value="5001-上海南极人服装有限公司2"></el-option>
                <el-option label="release" value="release" disabled></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="*客户订单号">
              <el-input v-model="formArr.input1" placeholder="*客户订单号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="*客户订单日期">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="formArr.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="产品型号">
              <el-input v-model="formArr.input2" placeholder="产品编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="生产日期">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="formArr.date2"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6" class="have-date">
            <el-form-item label="*生码订单号">
              <el-input v-model="formArr.input3" placeholder="产品编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="*生码订单日期">
              <el-date-picker
                type="date"
                placeholder="选择日期"
                v-model="formArr.date3"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="批次号">
              <el-input v-model="formArr.input4" placeholder="产品编号"></el-input>
            </el-form-item>
          </el-col>
        </el-form>

        <el-form class="ask-for clearfix" :gutter="20" :model="formArr2">
          <h4>生码订单要求及码组成</h4>
          <el-col :span="10">
            <el-form-item label="生码类型">
              <el-select class="w70" v-model="formArr2.select1" placeholder="*生码企业">
                <el-option label="套码" value="套码"></el-option>
                <el-option label="套码2" value="套码2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="选择套码规则">
              <el-select class="w70" v-model="formArr2.select2" placeholder="*生码企业">
                <el-option label="男士服装套码" value="男士服装套码"></el-option>
                <el-option label="男士服装套码2" value="男士服装套码2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-form>

        <div class="table1-parent static-table-parent">
          <div class="table1-tit">说明： 创建生码订单前需先确认选择相应的生码规则，根据规则进行生码。</div>
          <el-form :model="inServForm" ref="inServForm.infiledList" size="small">
            <template>
              <el-table
                show-summary
                border
                :data="inServForm.infiledList"
                :summary-method="getSummaries"
                style="width: 100%"
                @selection-change="handleSelectionChange"
                ref="multipleTable"
              >
                <el-table-column type="selection"></el-table-column>

                <el-table-column label="行号" width="70px" type="index" :index="indexMethod"></el-table-column>

                <el-table-column prop="input1" label="包装单位">
                  <template slot-scope="scope">
                    <el-input size="mini" v-model="scope.row.input1"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="input2" label="计划数量">
                  <template slot-scope="scope">
                    <el-input size="mini" v-model="scope.row.input2"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="input3" label="生产数量">
                  <template slot-scope="scope">
                    <el-input size="mini" v-model="scope.row.input3"></el-input>
                  </template>
                </el-table-column>

                <el-table-column prop="select1" label="物料型号">
                  <template slot-scope="scope">
                    <el-select v-model="scope.row.select1" clearable>
                      <el-option
                        v-for="item in select1s"
                        :key="item.value"
                        :label="item.text"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </template>
                </el-table-column>

                <el-table-column fixed="right" label="操作">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="deleteRow(scope.$index, inServForm.infiledList)"
                      type="success"
                    >删除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-form>

          <el-button
            @click="addRow(inServForm.infiledList)"
            type="primary"
            style="margin-top:10px;margin-bottom:10px;"
          >新增一行</el-button>
        </div>
        <div class="btns">
          <el-button type="primary">保存</el-button>
          <el-button type="success" @click="resetForm()">重置</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../../components/header";

export default {
  name: "printingRawCodeOrdeAdd",
  components: {
    commonHeader
  },
  data() {
    return {
      inServForm: {
        infiledList: [
          {
            select1: "型号1",
            input1: "瓶",
            input2: "100",
            input3: "100"
          },
          {
            select1: "型号1",
            input1: "瓶",
            input2: "100",
            input3: "100"
          },
          {
            select1: "型号1",
            input1: "瓶",
            input2: "100",
            input3: "100"
          }
        ]
      },
      // tab标题默认高亮
      activeName: "first",
      select: "5001-上海南极人服装有限公司",
      formArr: {
        select1: "5001-上海南极人服装有限公司",
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        date1: "",
        date2: "",
        date3: ""
      },
      formArr2: {
        select1: "",
        select2: ""
      },
      select1s: [
        { text: "型号1", value: "型号1" },
        { text: "型号2", value: "型号2" }
      ],
      // 表格已选择框
      multipleSelection: []
    };
  },
  created() {},

  methods: {
    // 选择框逻辑
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    // 表格序号
    indexMethod(index) {
      index = this.numAdd0(index + 1);
      return index;
    },

    numAdd0(value) {
      if (parseInt(value) < 10) {
        value = "0" + value;
      } else {
        value = value;
      }
      return value;
    },
    // 删除一行
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    // 新增一行
    addRow(tableData, event) {
      tableData.push({
        select1: "型号1",
        input1: "瓶",
        input2: "100",
        input3: "100"
      });
    },
    // 合计
    getSummaries(param) {
      let { columns, data } = param;
      // 数据等于已选择框里的值
      data = this.multipleSelection;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 1) {
          sums[index] = "总价";
          return;
        }
        if (index === 2) {
          sums[index] = "";
          return;
        }
        const values = data.map(item => {
          return Number(item[column.property]);
        });

        if (!values.every(value => isNaN(value))) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += " 个";
        } else {
          sums[index] = "";
        }
      });

      return sums;
    },

    // 官网取消全选CheckBox逻辑
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },

    // 重置
    resetForm(rows) {
      this.inServForm.infiledList.map((v, i) => {
        v.select1 = "型号1";
        v.input1 = "瓶";
        v.input2 = "100";
        v.input3 = "100";
      });
      this.toggleSelection();
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
  margin-top: 20px;
}

.added-page {
  margin-top: 30px;
}

.layui-form1 {
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
}

.table1-parent {
  margin-top: 10px;
  .table1-tit {
    text-align: right;
    font-size: 14px;
    line-height: 24px;
    color: #666;
    margin-bottom: 10px;
  }
}

.static-table-parent {
  overflow-x: auto;
  /deep/ {
    .el-input--mini .el-input__inner {
      height: 35px;
      line-height: 35px;
    }
  }

  table {
    width: 100%;
    border-collapse: collapse;
    // border-width: 1px;
    // border-style: solid;
    // border-color: #e6e6e6;
    text-align: center;
    tr {
      /deep/ {
        th {
          background: rgb(238, 241, 246);
          color: rgb(96, 98, 102);
          padding: 12px 0;
          font-size: 14px;
          border: 1px solid #ebeef5;
        }
        td {
          // background: rgb(238, 241, 246);
          // color: rgb(96, 98, 102);
          padding: 15px 5px;
          font-size: 14px;
          border: 1px solid #ebeef5;
        }

        .el-input__icon {
          line-height: 35px;
        }
      }
    }
  }
}

.ask-for {
  margin-top: 20px;
  h4 {
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: normal;
  }
}
</style>






