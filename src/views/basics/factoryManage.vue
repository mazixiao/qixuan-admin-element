
<template>
  <div :class="['content', {'active': isCollapse}]">
    <commonHeader></commonHeader>

    <el-tabs v-model="activeName" @tab-click="handleClick" class="common-tab">
      <el-tab-pane label="工厂管理" name="one">
        <el-form class="layui-form1 clearfix" :gutter="20" :model="formArr">
          <el-col :span="8">
            <el-form-item label="工厂代码">
              <el-select class="w100" v-model="formArr.select1" placeholder="请选择">
                <el-option label="润滑油" value="润滑油"></el-option>
                <el-option label="润滑油2" value="润滑油2"></el-option>
                <el-option label="release" value="release" disabled></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="工厂简称">
              <el-select class="w100" v-model="formArr.select2" placeholder="请选择">
                <el-option label="润滑油" value="润滑油"></el-option>
                <el-option label="润滑油2" value="润滑油2"></el-option>
                <el-option label="release" value="release" disabled></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="工厂公司名称">
              <el-select class="w100" v-model="formArr.select3" placeholder="请选择">
                <el-option label="润滑油" value="润滑油"></el-option>
                <el-option label="润滑油2" value="润滑油2"></el-option>
                <el-option label="release" value="release" disabled></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="工厂类型">
              <el-select class="w100" v-model="formArr.select4" placeholder="请选择">
                <el-option label="润滑油" value="润滑油"></el-option>
                <el-option label="润滑油2" value="润滑油2"></el-option>
                <el-option label="release" value="release" disabled></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="企业名称">
              <el-select class="w100" v-model="formArr.select5" placeholder="请选择">
                <el-option label="润滑油" value="润滑油"></el-option>
                <el-option label="润滑油2" value="润滑油2"></el-option>
                <el-option label="release" value="release" disabled></el-option>
              </el-select>
            </el-form-item>
          </el-col>

          <!-- <el-col :span="20" class="btns" style="float:left">
            <el-button type="primary">搜索</el-button>
            <el-button type="success">导出</el-button>
          </el-col> -->
        </el-form>

        <!-- Form -->
        <!-- <el-button type="primary" @click="dialogFormVisible = true"> -->
        <el-button type="primary" @click="show()">
          <i class="el-icon-plus"></i>
          新增工厂
        </el-button>

        <el-dialog
          title="新增工厂"
          :visible.sync="dialogFormVisible"
          class="newFactory"
          center
          width="600px"
        >
          <el-form :model="form" ref="form" :rules="rules" class="layui-form2">
            <el-form-item prop="input1" label="公司名称" :label-width="formLabelWidth" required>
              <el-input v-model.trim="form.input1"></el-input>
            </el-form-item>
            <el-form-item prop="input2" label="工厂简称" :label-width="formLabelWidth" required>
              <el-input v-model.trim="form.input2"></el-input>
            </el-form-item>

            <el-form-item prop="input3" label="工厂代码" :label-width="formLabelWidth" required>
              <el-input v-model.trim="form.input3"></el-input>
            </el-form-item>

            <el-form-item :label-width="formLabelWidth">
              <el-col style="color: #ccc">工厂代码由各企业编写填入</el-col>
            </el-form-item>

            <el-form-item prop="input4" label="工厂类型" :label-width="formLabelWidth" required>
              <el-input v-model.trim="form.input4"></el-input>
            </el-form-item>

<!------------------------------------------------ -->


            <el-form-item label="工厂地址" :label-width="formLabelWidth">
              <el-col :span="6">
                <el-form-item prop="country" style="margin-bottom: 0;" required>
                  <el-select class="w100" v-model.trim="form.country" placeholder="请选择">
                    <el-option label="中国大陆" value="中国大陆"></el-option>
                    <el-option label="其他" value="其他"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item prop="selectProvince" style="margin-bottom: 0;" required>
                  <el-select
                    v-model.trim="form.selectProvince"
                    filterable
                    @change="selectProvinceFun($event)"
                    placeholder="请选择省份"
                  >
                    <el-option value label="请选择省份"></el-option>
                    <el-option
                      :value="item"
                      :label="item.label"
                      v-for="(item, index) in form.city"
                      :key="index"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item prop="selectCity" style="margin-bottom: 0;" required>
                  <el-select
                    v-model.trim="form.selectCity"
                    filterable
                    @change="selectCityFun($event)"
                    placeholder="请选择城市"
                  >
                    <el-option value label="请选择城市"></el-option>
                    <el-option
                      :value="item"
                      :label="item.label"
                      v-for="(item, index) in form.cityList"
                      :key="index"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>

              <el-col :span="6">
                <el-form-item prop="selectArea" style="margin-bottom: 0;" required>
                  <el-select
                    v-model.trim="form.selectArea"
                    filterable
                    @change="selectAreaFun($event)"
                    placeholder="请选择区县"
                  >
                    <el-option value label="请选择区县"></el-option>
                    <el-option
                      :value="item"
                      :label="item.label"
                      v-for="(item, index) in form.areaList"
                      :key="index"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>



            </el-form-item>


<!------------------------------------------------ -->


            <el-form-item prop="detail" :label-width="formLabelWidth" required>
              <el-input v-model.trim="form.detail" placeholder="具体地址"></el-input>
            </el-form-item>

            <el-form-item prop="input5" label="经度" class="w50" :label-width="formLabelWidth">
              <el-input v-model.trim="form.input5"></el-input>
            </el-form-item>
            <el-form-item prop="input6" label="纬度" class="w50" :label-width="formLabelWidth">
              <el-input v-model.trim="form.input6"></el-input>
            </el-form-item>

            <el-form-item prop="input7" label="联系人" :label-width="formLabelWidth" required>
              <el-input v-model.trim="form.input7"></el-input>
            </el-form-item>

            <el-form-item prop="input8" label="联系电话" :label-width="formLabelWidth" required>
              <el-input v-model.trim="form.input8"></el-input>
            </el-form-item>
            <el-form-item prop="input9" label="手机号码" :label-width="formLabelWidth" required>
              <el-input v-model.trim="form.input9"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button size="small" @click="resetForm('form')">重 置</el-button>
            <el-button size="small" type="primary" @click="submitForm('form')">确 定</el-button>
          </div>
        </el-dialog>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
  
  
  <script>
import commonHeader from "../../components/header";

import city from "../../../static/json/map.json";
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "basicsFactoryManage",
  components: {
    commonHeader
  },
  data() {
    var noEmpty = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };
    var noEmpty2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };

    var checkTel = (rule, value, callback) => {
      if (!/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(value)) {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };

    var checkPhone = (rule, value, callback) => {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("不能为空"));
      } else {
        callback();
      }
    };


    return {
      // tab标题默认高亮
      activeName: "one",

      formArr: {
        select1: "",
        select2: "",
        select3: "",
        select4: "",
        select5: ""
      },

      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        input1: "",
        input2: "",
        input3: "",
        input4: "",
        input5: "",
        input6: "",
        input7: "",
        input8: "",
        input9: "",
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
      },
      formLabelWidth: "80px",

      rules: {
        input1: [
          {
            validator: noEmpty,
            required: true,
            message: "公司名称不能为空且不小于三位",
            trigger: "change"
          }
          // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        input2: [
          {
            validator: noEmpty2,
            required: true,
            message: "工厂简称不能为空",
            trigger: "change"
          }
        ],
        input3: [
          {
            validator: noEmpty2,
            required: true,
            message: "工厂代码不能为空",
            trigger: "change"
          }
        ],
        input4: [
          {
            validator: noEmpty2,
            required: true,
            message: "工厂类型不能为空",
            trigger: "change"
          }
        ],
        input5: [
          {
            validator: noEmpty2,
            required: true,
            message: "经度不能为空",
            trigger: "change"
          }
        ],
        input6: [
          {
            validator: noEmpty2,
            required: true,
            message: "纬度不能为空",
            trigger: "change"
          }
        ],

        country: [
          {
            validator: noEmpty2,
            required: true,
            message: "工厂类型不能为空",
            trigger: "change"
          }
        ],
        detail: [
          {
            validator: noEmpty2,
            required: true,
            message: "具体地址不能为空",
            trigger: "change"
          }
        ],

        input7: [
          {
            validator: noEmpty2,
            required: true,
            message: "联系人不能为空",
            trigger: "change"
          }
        ],
        input8: [
          {
            validator: checkTel,
            required: true,
            message: "联系电话不符合规则",
            trigger: "change"
          }
        ],
        input9: [
          {
            validator: checkPhone,
            required: true,
            message: "手机号码不符合规则",
            trigger: "change"
          }
        ]
      }
    };
  },

  computed: {
      isCollapse() {
          return this.$store.state.isCollapse
      },
  },

  created() {
    // this.show();
  },

  methods: {
    handleClick(tab, event) {
      console.log(tab, "tab");
      console.log(event, "event");
    },

    // 省份 市 县联动
    selectProvinceFun(event) {
      console.log(event.label);
      if (event) {
        this.form.cityList = event.children;
        this.form.selectArea = {};
      } else {
        this.form.cityList = [];
      }
      this.form.areaList = [];
    },
    selectCityFun(event) {
      console.log(event.label);
      if (event) {
        this.form.areaList = event.children;
        this.form.selectArea = {};
      } else {
        this.form.areaList = [];
      }
    },
    selectAreaFun(event) {
      console.log(event.label);
    },

    show() {
      this.dialogFormVisible = true;
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
          this.dialogFormVisible = false;
        } else {
          console.log("error submit!!");
          return false;
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

  .newFactory {
    .el-dialog__header {
      text-align: left;
    }
    .el-dialog__body {
      height: 300px;
      overflow: hidden;
      overflow-y: auto;
      // background: red;
    }
    .el-dialog__footer {
      text-align: right;
      padding: 10px 30px 20px;
    }
    .layui-form2 {
      /deep/ {
        label {
          text-align: right;
          vertical-align: middle;
          float: left;
          font-size: 14px;
          color: #606266;
          line-height: 40px !important;
          padding: 0 12px 0 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }
        .el-form-item {
          padding-right: 5px;
          > div {
            width: auto;
          }
        }
        .w50 {
          display: inline-block;
          width: 49%;
        }
      }
    }
  }
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
</style>
  
  
  
  
  
  
  