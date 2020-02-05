
<template>
  <div class="content">
    <commonHeader></commonHeader>

    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="新增生产计划" name="first">
        <el-row class="layui-form1">
          <el-col :span="8">
            <label class="small-tit">生码企业</label>
            <el-select class="w100" v-model="select" placeholder="请选择" @change="changeValue">
              <el-option label="5001-上海南极人服装有限公司" value="5001-上海南极人服装有限公司"></el-option>
              <el-option label="5001-上海南极人服装有限公司2" value="5001-上海南极人服装有限公司2"></el-option>
              <el-option label="release" value="release" disabled></el-option>
            </el-select>
          </el-col>
        </el-row>

        <el-row type="flex" align="center" class="rule">
          <div class="rule-tit">生码规则</div>
          <div class="rule-con">
            1、生码可根据企业需要选择包装单位和码类型，默认防伪码随机16位，追溯码为序列号默认16位但可修改。
            <br />2、根据客户对码的要求，如果需要通过手机查询防伪或参与营销，则需将相应网址放入生码内容内。
            <br />3、包装级别输入请按照从小到大、从内到外的顺序。
          </div>
        </el-row>

        <div class="form-parent">
          <div class="item" v-for="(item, index) in formArr" :key="index">
            <el-row class="item-tit" type="flex" justify="space-between">
              <h4>生码规则{{index + 1}}</h4>
              <el-button size="mini" type="primary" @click="removeForm(index)">
                <i class="el-icon-delete"></i>
                删除
              </el-button>
            </el-row>

            <el-form :gutter="20" :inline="true" :model="item.top" class="inputs clearfix">
              <el-col :span="7">
                <el-form-item label="规则编号">
                  <el-input v-model="item.top.input1" placeholder="规则编号"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="类别">
                  <el-select v-model="item.top.select1" placeholder="类别">
                    <el-option label="5001-上海南极人服装有限公司" value="5001-上海南极人服装有限公司"></el-option>
                    <el-option label="5001-上海南极人服装有限公司2" value="5001-上海南极人服装有限公司2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="3">
                <el-form-item label="包装级别">
                  <el-select v-model="item.top.select2" placeholder="包装级别" @change="changeValue1">
                    <el-option label="1级" value="1级"></el-option>
                    <el-option label="2级" value="2级"></el-option>
                    <el-option label="3级" value="3级"></el-option>
                  </el-select>
                  {{item.top.select2}}
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="套码规则名称">
                  <el-input v-model="item.top.input2" placeholder="系统自动生成"></el-input>
                </el-form-item>
              </el-col>
            </el-form>

            <div class="table1-parent static-table-parent">
              <table>
                <thead>
                  <tr>
                    <th width="110">行号</th>
                    <th width="110">包装单位</th>
                    <th width="75">物流码</th>
                    <th width="200">防伪码</th>
                    <th width="200">有无红包</th>
                    <th width="300">防伪网址</th>
                    <th width="300">营销网址</th>
                    <th width="108">包装数</th>
                    <th width="150">备注说明</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(list, index2) in item.table"
                    :key="index2"

                  >

                  <!-- {{item.table[index2]}} -->

                  <!-- <tr
                    v-for="(list, index2) in item.table"
                    :key="index2"
                    v-show="aa(item.top.select2)"
                  > -->




                    <td>{{index2 + 1}}</td>
                    <td>
                      <el-input v-model="list.input1" placeholder="瓶"></el-input>
                    </td>
                    <td>
                      <el-checkbox v-model="list.checked1"></el-checkbox>
                    </td>
                    <td>
                      <el-select v-model="list.select1" placeholder="请选择">
                        <el-option label="明码 + 无验证码" value="明码 + 无验证码"></el-option>
                        <el-option label="明码 + 验证码" value="明码 + 验证码"></el-option>
                        <el-option label="暗码 + 无验证码" value="暗码 + 无验证码"></el-option>
                        <el-option label="无防伪" value="无防伪"></el-option>
                      </el-select>
                    </td>
                    <td>
                      <el-select v-model="list.select2" placeholder="请选择">
                        <el-option label="防伪码红包" value="防伪码红包"></el-option>
                        <el-option label="红包码" value="红包码"></el-option>
                        <el-option label="无红包" value="无红包"></el-option>
                      </el-select>
                    </td>
                    <td>
                      <el-input v-model="list.input2" placeholder="http://120.27.163.70/"></el-input>
                    </td>
                    <td>
                      <el-input v-model="list.input3" placeholder="http://120.27.163.70/"></el-input>
                    </td>
                    <td>
                      <el-input v-model="list.input4" placeholder="12"></el-input>
                    </td>
                    <td>
                      <el-input v-model="list.input5" placeholder="内包装码"></el-input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button class="added-page" @click="addForm">
          <i class="el-icon-plus"></i>
          新增客户套码规则
        </button>
        <div class="btns">
          <el-button type="primary">查询</el-button>
          <el-button type="success">导出</el-button>
        </div>
      </el-tab-pane>
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
      select: "5001-上海南极人服装有限公司",
      formArr: [
        {
          top: {
            input1: "",
            input2: "系统自动生成",
            select1: "5001-上海南极人服装有限公司",
            select2: "1级"
          },
          table: [
            {
              input1: "瓶",
              input2: "http://120.27.163.70/",
              input3: "http://120.27.163.70/",
              input4: "12",
              input5: "内包装码",
              checked1: false,
              select1: "明码 + 无验证码",
              select2: "明码 + 验证码"
            },
            {
              input1: "瓶",
              input2: "http://120.27.163.70/",
              input3: "http://120.27.163.70/",
              input4: "12",
              input5: "内包装码",
              checked1: false,
              select1: "明码 + 无验证码",
              select2: "明码 + 验证码"
            },
            {
              input1: "瓶",
              input2: "http://120.27.163.70/",
              input3: "http://120.27.163.70/",
              input4: "12",
              input5: "内包装码",
              checked1: false,
              select1: "明码 + 无验证码",
              select2: "明码 + 验证码"
            }
          ]
        },
        {
          top: {
            input1: "",
            input2: "系统自动生成",
            select1: "5001-上海南极人服装有限公司",
            select2: "1级"
          },
          table: [
            {
              input1: "瓶",
              input2: "http://120.27.163.70/",
              input3: "http://120.27.163.70/",
              input4: "12",
              input5: "内包装码",
              checked1: false,
              select1: "明码 + 无验证码",
              select2: "明码 + 验证码"
            },
            {
              input1: "瓶",
              input2: "http://120.27.163.70/",
              input3: "http://120.27.163.70/",
              input4: "12",
              input5: "内包装码",
              checked1: false,
              select1: "明码 + 无验证码",
              select2: "明码 + 验证码"
            },
            {
              input1: "瓶",
              input2: "http://120.27.163.70/",
              input3: "http://120.27.163.70/",
              input4: "12",
              input5: "内包装码",
              checked1: false,
              select1: "明码 + 无验证码",
              select2: "明码 + 验证码"
            }
          ]
        }
      ]
    };
  },

  created() {},
  computed: {

  },

  methods: {
    //方法
    changeValue(val) {
      // console.log(val, "val");
    },
    addForm() {
      this.formArr.push({
        top: {
          input1: "",
          input2: "系统自动生成",
          select1: "5001-上海南极人服装有限公司",
          select2: "1级"
        },
        table: [
          {
            input1: "瓶",
            input2: "http://120.27.163.70/",
            input3: "http://120.27.163.70/",
            input4: "12",
            input5: "内包装码",
            checked1: false,
            select1: "明码 + 无验证码",
            select2: "明码 + 验证码"
          },
          {
            input1: "瓶",
            input2: "http://120.27.163.70/",
            input3: "http://120.27.163.70/",
            input4: "12",
            input5: "内包装码",
            checked1: false,
            select1: "明码 + 无验证码",
            select2: "明码 + 验证码"
          },
          {
            input1: "瓶",
            input2: "http://120.27.163.70/",
            input3: "http://120.27.163.70/",
            input4: "12",
            input5: "内包装码",
            checked1: false,
            select1: "明码 + 无验证码",
            select2: "明码 + 验证码"
          }
        ]
      });
    },
    removeForm(index) {
      this.formArr.splice(index, 1);
      // console.log(this.formArr);
    },
    changeValue1(val) {
      console.log(val, "val");
    },

        aa(index) {
          console.log(index, "index");
          if(index == "1级") {
            
          }
      return false
    }

  },
  mounted() {
    this.num = this.$route.params.num,
    this.aa();
    // console.log(this.num)
  }
};
</script>


<style scoped lang="scss">
.rule {
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
  padding: 15px;
  .rule-tit {
    width: 80px;
    height: 80px;
    line-height: 80px;
    border-radius: 50%;
    background-color: #e5effb;
    font-size: 14px;
    color: #0064dc;
    text-align: center;
    margin-right: 50px;
  }
  .rule-con {
    font-size: 14px;
    line-height: 24px;
    color: #666;
    width: 80%;
  }
}

.form-parent {
  .item {
    border-top: 2px solid #0064dc;
    padding-bottom: 20px;
    .item-tit {
      align-items: flex-start;
      h4 {
        width: 200px;
        height: 60px;
        line-height: 60px;
        background-color: #e5effb;
        color: #0064dc;
        font-size: 16px;
        text-align: center;
        font-weight: normal;
      }
      button {
        margin-top: 10px;
      }
    }

    .inputs {
      /deep/ .el-form-item {
        width: 100%;
        margin-right: 0;
        padding-right: 20px;
        box-sizing: border-box;
        .el-form-item__label {
          display: block;
          text-align: left;
          line-height: 30px;
          margin-top: 5px;
        }
        div {
          width: 100%;
        }
      }
    }
  }
}

.static-table-parent {
  overflow-x: auto;
  table {
    width: 1561px;
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
          padding: 5px;
          font-size: 14px;
          border: 1px solid #ebeef5;
        }
        input {
          height: 35px;
          line-height: 35px;
        }
        .el-input__icon {
          line-height: 35px;
        }
      }
    }
  }
}
</style>






