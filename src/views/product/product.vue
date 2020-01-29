
<template>
  <div class="content">
    <commonHeader></commonHeader>
    <el-tabs v-model="activeName" class="common-tab">
      <el-tab-pane label="生产管理" name="first">
        <el-form :model="inServForm" ref="inServForm" label-width="130px" size="small">
          <el-form-item label="输入参数列表" prop="servin">
            <el-button type="primary" @click="addRow(infiledList)">新增</el-button>
            <template>
              <el-table border :data="infiledList" style="width: 100%">
                <el-table-column prop="fildna" label="名称" style="width:6vw;">
                  <template scope="scope">
                    <el-input size="mini" v-model="scope.row.fildna"></el-input>
                  </template>
                </el-table-column>
                <el-table-column prop="fildtp" label="类型">
                  <template scope="scope">
                    <el-select v-model="scope.row.fildtp" clearable>
                      <el-option
                        v-for="item in fildtps"
                        :key="item.value"
                        :label="item.text"
                        :value="item.value"
                      ></el-option>
                    </el-select>
                  </template>
                </el-table-column>
                <el-table-column prop="remark" label="备注">
                  <template scope="scope">
                    <el-input size="mini" v-model="scope.row.remark"></el-input>
                  </template>
                </el-table-column>
                <el-table-column fixed="right" label="操作">
                  <template slot-scope="scope">
                    <el-button
                      @click.native.prevent="deleteRow(scope.$index, infiledList)"
                      size="small"
                    >移除</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </template>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>


<script>
import commonHeader from "../../components/header";

export default {
  name: "product",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "first",
      infiledList: [{ fildna: "", fildtp: "", remark: "" }],
      fildtps: [
        { text: "字符", value: "1" },
        { text: "数字", value: "2" }
      ]
    };
  },
  created() {},

  methods: {
    deleteRow(index, rows) {
      //删除改行
      rows.splice(index, 1);
    },
    addRow(tableData, event) {
      tableData.push({ fildna: "", fildtp: "", remark: "" });
    }
  }
};
</script>


<style scoped lang="scss">
</style>






