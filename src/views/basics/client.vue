
<template>
  <div class="content">
    <commonHeader></commonHeader>

    <el-tabs v-model="activeName" @tab-click="handleClick" class="common-tab">
      <el-tab-pane label="新增送货地" name="one">
        <el-form class="layui-form1 clearfix" :gutter="20" :model="formArr">
          <el-form-item class="item" v-for="(item, index) in formArr.formCon" :key="index">
            <el-col :span="20" class="btns">
              <el-button type="primary">送货地 {{index + 1}}</el-button>
              <el-button type="success" size="small" class="fr" @click="removeSite(index)">
                <i class="el-icon-delete"></i>
                删除
              </el-button>
            </el-col>
            <el-form-item class="item-con">
              <el-col :span="6">
                <el-form-item label="企业名称" required>
                  <el-input v-model="formArr.formCon[index].input1" placeholder="企业名称"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="企业编号" required>
                  <el-input v-model="formArr.formCon[index].input2" placeholder="企业编号"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="企业简称" required>
                  <el-input v-model="formArr.formCon[index].input3" placeholder="企业简称"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="行业" required>
                  <el-select
                    class="w100"
                    v-model="formArr.formCon[index].select1"
                    placeholder="请选择"
                  >
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
                      <el-select
                        class="w100"
                        v-model="formArr.formCon[index].country"
                        placeholder="请选择"
                      >
                        <el-option label="中国大陆" value="中国大陆"></el-option>
                        <el-option label="其他" value="其他"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item>
                      <el-select
                        v-model="formArr.formCon[index].selectProvince"
                        filterable
                        @change="selectProvinceFun($event, index)"
                        placeholder="请选择省份"
                      >
                        <el-option value label="请选择省份"></el-option>
                        <el-option
                          :value="item"
                          :label="item.label"
                          v-for="(item, index) in formArr.formCon[index].city"
                          :key="index"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item>
                      <el-select
                        v-model="formArr.formCon[index].selectCity"
                        filterable
                        @change="selectCityFun($event, index)"
                        placeholder="请选择城市"
                      >
                        <el-option value label="请选择城市"></el-option>
                        <el-option
                          :value="item"
                          :label="item.label"
                          v-for="(item, index) in formArr.formCon[index].cityList"
                          :key="index"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <el-col :span="4">
                    <el-form-item>
                      <el-select
                        v-model="formArr.formCon[index].selectArea"
                        filterable
                        @change="selectAreaFun($event, index)"
                        placeholder="请选择区县"
                      >
                        <el-option value label="请选择区县"></el-option>
                        <el-option
                          :value="item"
                          :label="item.label"
                          v-for="(item, index) in formArr.formCon[index].areaList"
                          :key="index"
                        ></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>

                  <el-col :span="9">
                    <el-form-item label>
                      <el-input v-model="formArr.formCon[index].detail" placeholder="具体地址"></el-input>
                    </el-form-item>
                  </el-col>
                </el-form-item>
              </el-col>
            </el-form-item>
          </el-form-item>
        </el-form>
        <el-col :span="20" class="btns">
          <el-button type="success" @click="addSite">
            <i class="el-icon-plus"></i>
            新增送货地址
          </el-button>
        </el-col>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
  
  
  <script>
import commonHeader from "../../components/header";

import city from "../../../static/json/map.json";
export default {
  name: "client",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "one",

      formArr: {
        formCon: [
          {
            input1: "",
            input2: "",
            input3: "",
            select1: "",
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
        ]
      }
    };
  },

  computed: {},

  created() {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, "tab");
      console.log(event, "event");
    },

    // 省份 市 县联动
    selectProvinceFun(event, index) {
      console.log(event.label);
      if (event) {
        this.formArr.formCon[index].cityList = event.children;
        this.formArr.formCon[index].selectArea = {};
      } else {
        this.formArr.formCon[index].cityList = [];
      }
      this.formArr.formCon[index].areaList = [];
    },
    selectCityFun(event, index) {
      console.log(event.label);
      if (event) {
        this.formArr.formCon[index].areaList = event.children;
        this.formArr.formCon[index].selectArea = {};
      } else {
        this.formArr.formCon[index].areaList = [];
      }
    },
    selectAreaFun(event, index) {
      console.log(event.label);
    },

    addSite() {
      this.formArr.formCon.push({
        input1: "",
        input2: "",
        input3: "",
        select1: "",
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
      });
    },
    removeSite(index) {
      this.formArr.formCon.splice(index, 1);
    }
  }
};
</script>
  
  
<style scoped lang="scss">
.layui-form1 {
  .item {
    position: relative;
    padding-right: 0;
    .item-con {
      border: 2px solid #ccc;
      padding-left: 44px;
      padding-right: 44px;
      padding-top: 20px;
      padding-bottom: 0;
      margin-bottom: 0;
      position: relative;
      // padding-right: 0;
    }
  }
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
  
  
  
  
  
  
  