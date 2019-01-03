<template>
  <div class="uploadDemoBox">
    <el-upload
    class="upload-demo"
    drag
    ref="upload"
    action="https://jsonplaceholder.typicode.com/posts/"
    :auto-upload="false"
    :on-progress="handleProgress"
    :on-error="handleErr"
    :on-success="handleSuccess"
    multiple>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
</el-upload>
<el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  methods:{
    submitUpload() {
        this.$refs.upload.submit();
      },
      handleProgress(event, file, fileList) {
        console.log(file.percentage)
      },
      handleErr(){
        
      }
  }
}
</script>
<style lang="">
  .uploadDemoBox{
    height: 350px;
    width: 1000px;
    margin: 50px auto;
    border: 1px solid #000;
  }
  .el-upload-dragger{
    height: 350px;
    width: 1000px;
  }
</style>