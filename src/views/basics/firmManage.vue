
<template>
  <div :class="['content', {'active': isCollapse}]">
    <commonHeader></commonHeader>

    <el-tabs v-model="activeName" @tab-click="handleClick" class="common-tab">
      <el-tab-pane label="企业管理" name="one">
        <el-form class="layui-form1 clearfix" :gutter="20" :model="formArr">
          <el-col :span="6">
            <el-form-item label="企业名称" required>
              <el-input v-model="formArr.input1" placeholder="企业名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="企业编号" required>
              <el-input v-model="formArr.input2" placeholder="企业编号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="企业简称" required>
              <el-input v-model="formArr.input3" placeholder="企业简称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="行业" required>
              <el-select class="w100" v-model="formArr.select1" placeholder="请选择">
                <el-option label="润滑油" value="润滑油"></el-option>
                <el-option label="润滑油2" value="润滑油2"></el-option>
                <el-option label="release" value="release" disabled></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="企业地址" required>
              <el-col :span="3">
                <el-form-item>
                  <el-select class="w100" v-model="formArr.provinces.country" placeholder="请选择">
                    <el-option label="中国大陆" value="中国大陆"></el-option>
                    <el-option label="其他" value="其他"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item>
                  <el-select
                    v-model="formArr.provinces.selectProvince"
                    filterable
                    @change="selectProvinceFun($event)"
                    placeholder="请选择省份"
                  >
                    <el-option value label="请选择省份"></el-option>
                    <el-option
                      :value="item"
                      :label="item.label"
                      v-for="(item, index) in formArr.provinces.city"
                      :key="index"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item>
                  <el-select
                    v-model="formArr.provinces.selectCity"
                    filterable
                    @change="selectCityFun($event)"
                    placeholder="请选择城市"
                  >
                    <el-option value label="请选择城市"></el-option>
                    <el-option
                      :value="item"
                      :label="item.label"
                      v-for="(item, index) in formArr.provinces.cityList"
                      :key="index"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="4">
                <el-form-item>
                  <el-select
                    v-model="formArr.provinces.selectArea"
                    filterable
                    @change="selectAreaFun($event)"
                    placeholder="请选择区县"
                  >
                    <el-option value label="请选择区县"></el-option>
                    <el-option
                      :value="item"
                      :label="item.label"
                      v-for="(item, index) in formArr.provinces.areaList"
                      :key="index"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="9">
                <el-form-item label>
                  <el-input v-model="formArr.provinces.detail" placeholder="具体地址"></el-input>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-col>

          <el-col :span="20" class="btns">
            <el-button @click="derive"  type="success">获取选中数据</el-button>
          </el-col>
        </el-form>

        <el-tabs v-model="activeName1">
            <el-tab-pane label="基础信息" name="first">基础信息内容</el-tab-pane>
            <el-tab-pane label=" 模块配置" name="second">模块配置内容</el-tab-pane>
            <el-tab-pane label="系统参数" name="third">系统参数内容</el-tab-pane>
        </el-tabs>

        <el-col :span="24" class="btns">
          <el-button type="primary">保存</el-button>
          <el-button type="success">取消</el-button>
        </el-col>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>
  
  
  <script>
import commonHeader from "../../components/header";

import city from "../../../static/json/map.json";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "basicsFirmManage",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "one",
      activeName1: "first",
      // 编辑器
      content0: `<p>请编辑内容00</p>`,
      content1: `<p>请编辑内容11</p>`,
      content2: `<p>请编辑内容22</p>`,
      editorOption: {
        theme: "snow"
      },
      // 上传
      dialogImageUrl: "",
      dialogVisible: false,
      fileList: [],
      uploadBg: true,

      formArr: {
        input1: "",
        input2: "",
        input3: "",
        select1: "",
        provinces: {
          country: "",
          // 整个省市县数据
          city: city,
          // 被选中的市数据
          cityList: [],
          // 被选中的县数据
          areaList: [],
          selectProvince: {},
          selectCity: {},
          selectArea: {},
          detail: ""
        }
      }
    };
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
      isCollapse() {
          return this.$store.state.isCollapse
      },

  },



  created() {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, "tab");
      console.log(event, "event");
    },

    // 省份 市 县联动
    selectProvinceFun(event) {
      console.log(event.label);
      if (event) {
        this.formArr.provinces.cityList = event.children;
        this.formArr.provinces.selectArea = {};
      } else {
        this.formArr.provinces.cityList = [];
      }
      this.formArr.provinces.areaList = [];
    },
    selectCityFun(event) {
      console.log(event.label);
      if (event) {
        this.formArr.provinces.areaList = event.children;
        this.formArr.provinces.selectArea = {};
      } else {
        this.formArr.provinces.areaList = [];
      }
    },
    selectAreaFun(event) {
      console.log(event.label);
    },

    derive() {
        console.log(this.formArr);
      var date = [
        this.formArr.input1,
        this.formArr.input2,
        this.formArr.input3,
        this.formArr.select1,
        this.formArr.provinces.selectProvince.label,
        this.formArr.provinces.selectCity.label,
        this.formArr.provinces.selectArea.label,
        this.formArr.provinces.detail,




        // provinces: {
        //   country: "",
        //   // 整个省市县数据
        //   city: city,
        //   // 被选中的市数据
        //   cityList: [],
        //   // 被选中的县数据
        //   areaList: [],
        //   selectProvince: {},
        //   selectCity: {},
        //   selectArea: {},
        //   detail: ""
        // }

        
      ];
      // console.log(this.formArr);
      this.$alert(date, "导出数据", {
        confirmButtonText: "确定",
        closeOnClickModal: "true",
        callback: action => {
          this.$message({
            type: "success",
            message: '关闭成功'
          });
        }
      });
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
  position: relative;
}

/deep/ {
  .ql-editor {
    height: 200px;
  }
  .el-upload-list--picture-card .el-upload-list__item {
    img {
      height: auto;
    }
  }
  .el-upload-list--picture .el-upload-list__item-thumbnail {
    width: auto;
  }

  .el-form-item {
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
    > div {
      width: 100%;
    }
  }


}



.upload-bg {
  margin-top: 10px;
}

.size {
  font-size: 12px;
}

h4 {
  font-size: 16px;
  color: #333333;
  margin-bottom: 20px;
  font-weight: normal;
}

.btns {
  margin-top: 20px;
  float: none;
  width: 100%;
}

.advertising-parent {
  border: 2px solid #ccc;
  padding-bottom: 30px;
  margin-bottom: 40px;
  position: relative;
  flex-wrap: wrap;
  .advertising-parent-con {
    width: 100%;
    .el-row {
      border-bottom: 1px dashed #e5e5e5;
      padding-bottom: 30px;
      padding-left: 44px;
      padding-right: 44px;
      padding-top: 20px;
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>
  
  
  
  
  
  
  