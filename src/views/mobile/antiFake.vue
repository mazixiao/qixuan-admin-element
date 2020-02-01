
<template>
  <div class="content">
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
          <el-col :span="20" class="btns">
            <el-button type="primary" @click="saveHtml(0)">保存</el-button>
            <el-button type="success">取消</el-button>
          </el-col>
        </div>
        <div class="edit_container">
          <quill-editor
            v-model="content1"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @change="onEditorChange($event)"
          ></quill-editor>
          <el-col :span="20" class="btns">
            <el-button type="primary" @click="saveHtml(1)">保存</el-button>
            <el-button type="success">取消</el-button>
          </el-col>
        </div>
      </el-tab-pane>
      <el-tab-pane label="防伪查询页面设置" name="two">
        防伪查询页面设置
        
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
           :limit="1"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>



      </el-tab-pane>
      <el-tab-pane label="防伪查询页面结果页面设置" name="three">防伪查询页面结果页面设置</el-tab-pane>
      <el-tab-pane label="两步出结果页面设置" name="four">两步出结果页面设置</el-tab-pane>
    </el-tabs>
  </div>
</template>
  
  
  <script>
import commonHeader from "../../components/header";
export default {
  name: "mobileAntiFake",
  components: {
    commonHeader
  },
  data() {
    return {
      // tab标题默认高亮
      activeName: "two",
      // 编辑器
      content0: `<p>请编辑内容00</p>`,
      content1: `<p>请编辑内容11</p>`,
      editorOption: {
        theme: "snow"
      },
      // 上传
      dialogImageUrl: "",
      dialogVisible: false
    };
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
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
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
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
/deep/ {
  .ql-editor {
    height: 200px;
  }
.el-upload-list--picture-card .el-upload-list__item {
  img {
    height: auto;
  }
}

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
}
</style>
  
  
  
  
  
  
  