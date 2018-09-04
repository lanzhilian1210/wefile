<template>
<div>
    <el-upload
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        class="upload-demo1"
        ref="upload"
        :on-change="handleChange"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
    </el-upload>
    <el-upload
        class="upload-demo"
        ref="upload"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :on-change="handleChange"
        :auto-upload="false">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </el-upload>
    <ul>
      <li v-for="(lis,index) in fileList" :key="index">
                <span class="lisName">{{lis.name}}</span>
                <el-progress :percentage="num"></el-progress>
          </li>
    </ul>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        num:0,
        fileList: [],
      };
    },
    methods: {
      submitUpload() {
          console.log(this.$refs.upload);
        this.$refs.upload.submit();
      },
      handleChange(file,fileList) {
        this.fileList.push(
          {
            name:file.name
          }
        );
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>