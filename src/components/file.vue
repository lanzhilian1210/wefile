<template>
    <div class="inputBox">
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <el-upload
            class="uploadCont"
            drag
            action="v1/upload/file"
            ref="upload"
            :show-file-list="true"
            :file-list="fileList"
            @on-change="handleChange"
            :auto-upload="false"
            multiple>
            <div class="minCont">
                <i class="el-icon-upload"></i>
            <div class="el-upload__text">将需转换的PDF文件拖放至此，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </div>
        </el-upload>
        
    </div>
</template>
<script>
    export default{
        data() {
            return {
                fileList:[],
            }
        },
        methods:{
            handleChange(file,fileList){
                console.log(file.size/1024);
            },
            submitUpload() {
                this.$refs.upload.submit();
            }
        }
    }
</script>
<style>
.inputBox{
    height: 370px;
    margin:160px 55px 0;
    background: lightgray;
}
.uploadCont,.el-upload-dragger,.el-upload{
    width: 100%;
    height: 100%;
}
.el-upload-dragger{
    border: 1px solid #797979;
    padding: 20px;
}
.minCont{
    box-sizing: content-box;
    border: 1px dashed #797979;
    height: 328px;
}
</style>

