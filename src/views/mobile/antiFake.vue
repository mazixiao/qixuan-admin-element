
<template>
  <div :class="['content', {'active': isCollapse}]">
    <commonHeader></commonHeader>

    <el-tabs v-model="activeName" @tab-click="handleClick" class="common-tab">
      <el-tab-pane label="向导页面设置" name="one">
        <h4>向导页面设置</h4>
        <div class="edit_container">
          <quill-editor
            v-model="content0"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
          ></quill-editor>
          <el-col :span="24" class="btns">
            <el-button type="primary" @click="saveHtml(0)">保存</el-button>
            <el-button type="success">取消</el-button>
          </el-col>
        </div>
      </el-tab-pane>
      <el-tab-pane label="防伪查询页面设置" name="two">
        <h4>背景图</h4>
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture"
          :limit="1"
          :on-success="uploadSuccess"
          :on-error="uploadError"
          :on-progress="uploadProgress"
          :before-upload="beforeAvatarUpload"
        >
          <el-button size="small" type="primary">点击上传</el-button>
          <label class="size">尺寸750*860</label>
        </el-upload>
        <img class="upload-bg" v-show="uploadBg" src="../../assets/img/upload-bg.png" alt />

        <hr style="margin-top:20px;margin-bottom:20px" />
        <h4>防伪向导</h4>
        <div class="edit_container">
          <quill-editor
            v-model="content1"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
          ></quill-editor>
          <el-col :span="24" class="btns">
            <el-button type="primary" @click="saveHtml(1)">保存</el-button>
            <el-button type="success">取消</el-button>
          </el-col>
        </div>
      </el-tab-pane>
      <el-tab-pane label="防伪查询页面结果页面设置" name="three">
        <h4>产品详情内容编辑</h4>

        <el-form class="layui-form1 clearfix" :gutter="20" :model="formArr">
          <el-col :span="8">
            <el-form-item label="内容1">
              <el-input v-model="formArr.input1" placeholder="产品名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="内容2">
              <el-input v-model="formArr.input2" placeholder="产品规格"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="内容3">
              <el-date-picker
                type="date"
                placeholder="生产日期"
                v-model="formArr.date1"
                style="width: 100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="内容4">
              <el-input v-model="formArr.input3" placeholder="生产工厂"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="内容5">
              <el-input v-model="formArr.input4" placeholder="生产地址"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8" v-for="(item, index) in formArr.add" :key="index">
            <el-form-item :label="'内容' + (index + 6)">
              <el-input v-model="item['input']" placeholder="新增"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="24" class="btns" style="position:absolute;bottom:0;left:0">
            <el-button type="primary" @click="addInput">新增</el-button>
          </el-col>
        </el-form>

        <h4>防伪结果信息编辑</h4>
        <div class="edit_container">
          <quill-editor
            v-model="content2"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
          ></quill-editor>
          <!-- <el-col :span="24" class="btns">
            <el-button type="primary" @click="saveHtml(2)">保存</el-button>
            <el-button type="success">取消</el-button>
          </el-col>-->
        </div>
        <h4 style="margin-top:20px;">广告位内容编辑</h4>

        <el-container class="advertising-parent">
          <el-row class="advertising-parent-con">
            <el-row :gutter="0" style="width: 100%" v-for="(item, index) in uploadArr" :key="index">
              <el-col :span="4" style>广告图片{{index + 1}}</el-col>
              <el-col :span="20" style>
                <el-col class="load" :span="8">
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="(res,file)=>{return handleRemove1(res,file, index)}"
                    :file-list="fileList"
                    list-type="picture"
                    :limit="1"
                    :on-success="(res,file)=>{return uploadSuccess1(res,file, index)}"
                    :on-error="uploadError"
                    :on-progress="uploadProgress"
                  >
                    <el-button size="small" type="primary">点击上传</el-button>
                    <label class="size">尺寸750*860</label>
                  </el-upload>
                  <img
                    class="upload-bg"
                    v-show="item.uploadBg"
                    src="../../assets/img/upload-bg.png"
                    alt
                  />
                </el-col>
                <label class="size fl" style="line-height:40px;margin-right:10px;">网址链接</label>
                <el-col :span="8">
                  <el-input v-model="item.link" placeholder="HTTP://"></el-input>
                </el-col>
                <el-button class="fr" size="small" type="primary" @click="uploadDelete(index)">
                  <i class="el-icon-delete"></i>
                  删除
                </el-button>
              </el-col>
            </el-row>
          </el-row>

          <el-col :span="24" class="btns" style="position:absolute;bottom:0;left:0">
            <el-button type="primary" @click="uploadAdd">新增</el-button>
          </el-col>
        </el-container>
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
// 辅助函数（简写）
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "mobileAntiFake",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "one",
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
        input4: "",
        date1: "",
        add: []
      },
      uploadArr: [
        {
          link: "HTTP://",
          uploadBg: true
        },
        {
          link: "HTTP://",
          uploadBg: true
        }
      ]
    };
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    },
    ...mapState(["count", "count1", "isCollapse"]),
      // isCollapse() {
      //     return this.$store.state.isCollapse
      // },

  },




  created() {},

  methods: {
    handleClick(tab, event) {
      console.log(tab, "tab");
      console.log(event, "event");
    },

    onEditorReady(editor) {
      // 准备编辑器
    },
    onEditorBlur() {}, // 失去焦点事件
    onEditorFocus() {}, // 获得焦点事件
    onEditorChange() {}, // 内容改变事件
    saveHtml: function(id) {
      alert(this["content" + id]);
    },

    // 上传
    // 移除
    handleRemove(res, file, index) {
      console.log(res, "res");
      console.log(file, "file");
      console.log(index, "index");
      this.uploadBg = !this.uploadBg;
    },

      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 0.5;
        console.log(file.size, "isLt2MisLt2M");

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
          this.uploadBg = !this.uploadBg;
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 0.5MB!');
          this.uploadBg = !this.uploadBg;
        }
        return isJPG && isLt2M;
      },




    handleRemove1(res, file, index) {
      console.log(res, "res");
      console.log(file, "file");
      console.log(index, "index");
      this.uploadArr[index].uploadBg = !this.uploadArr[index].uploadBg;
    },

    handlePreview(file) {
      console.log(file, "file");
    },
    uploadSuccess(res, file, index) {
      this.uploadBg = !this.uploadBg;
      this.$message.success("上传成功");
      console.log(res, "res");
      console.log(file, "file");
      console.log(index, "index");
    },

    uploadSuccess1(res, file, index) {
      this.uploadArr[index].uploadBg = !this.uploadArr[index].uploadBg;
      this.$message.success("上传成功");
      console.log(res, "res");
      console.log(file, "file");
      console.log(index, "index");
    },

    uploadError(response, file, fileList) {
  
      this.$message.error("上传失败");
      console.log(response);
    },
    uploadProgress(event, file, fileList) {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.1)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
    },

    


    // 新增input(产品详情内容编辑)
    addInput() {
      this.formArr.add.push({
        input: "新增"
      });
    },
    // 广告位内容编辑
    uploadAdd() {
      this.uploadArr.push({
        link: "HTTP://",
        uploadBg: true
      });
    },
    uploadDelete(index) {
      // console.log(index);
      this.uploadArr.splice(index, 1);
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
    div {
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
  
  
  
  
  
  
  