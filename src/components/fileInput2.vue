<template>
    <div class="inputBox">
        <div class="uploadBox"> 
            <el-upload
                class="upload-demo"
                drag
                ref="upload"
                :auto-upload="false"
                :on-error="handleError"
                :on-success="handleSuccess"
                :on-change="handleChange"
                :on-progress="handleProgress"
                :on-remove="handleRemove"
                action="https://jsonplaceholder.typicode.com/posts/"
                multiple>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>               
        </div>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <!-- <ul class="fileList">
            <li>
                <img src="../../static/img/money.jpg" alt=""><span>文件名</span><img src="../../static/img/delete.png" class="delete">
            </li>
        </ul> -->
        <!-- <div class="xFileBtn" @click="submitUpload">操作</div> -->
    </div>
</template>
<script>
    import FileUpload from 'vue-upload-component';
    export default{
        components: {
            FileUpload,
        },
        data() {
            return {
                fileList:[], // 存储pdf类型
                otherFileList:[], //存储非pdf类型文件
                size:0,
                fileName: '',
                current:-1,
                currentShow:-1,
                progress: 0,
                chooseIndex: 0,
                hasChooseFileBox:false
            }
        },
        methods:{
            handleProgress(event, file, fileList){
                // console.log(file.percentage)
                if(file.percentage>98){
                    return false;
                }
            },

            handleChange(file, fileList){
                console.log(file,fileList);
                this.fileList = fileList;
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handleSuccess(response, file, fileList){
                console.log(response)
            },
            handleError(err, file, fileList){
                console.log(this.fileList )
                fileList = this.fileList;
                console.log(fileList)
            },
            submitUpload() {
                console.log(this.fileList)
                this.$refs.upload.submit();
            },


        },
        filters:{
            formatSize(size) {
            if (size > 1024 * 1024 * 1024 * 1024) {
                return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB'
            } else if (size > 1024 * 1024 * 1024) {
                return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB'
            } else if (size > 1024 * 1024) {
                return (size / 1024 / 1024).toFixed(2) + ' MB'
            } else if (size > 1024) {
                return (size / 1024).toFixed(2) + ' KB'
            }
            return size.toString() + ' B'
            }
        }
    }
</script>
<style>
.inputBox{
    height: 300px;
    margin:160px 40px 0;
    border: 1px solid #ccc;
    background: #007AEF;
}
.uploadBox{
    width: 100% !important;
    height:300px;
}
.text-center h4{
    height: 40px;
    font:28px/40px "微软雅黑";
    color: #000;
    margin-top: 10px;
}
.isShow{
    display: none;
}
.txtDis{
    font-size: 24px;
    color: #fff;
    text-align: center;
    margin: 120px auto 0;
}
.txtDis2{
    font-size: 24px;
    color: #fff;
    text-align: center;
    margin: 20px auto 0;
    text-decoration: #000;
}
.addFdf{
    width: 100%;
    height: 98px;
    border: 1px solid #e0e0e0;
    font: 18px/98px "微软雅黑";
    color: #333;
    border-radius: 5px;
    position: relative; 
}
.chooseFileBox{
    width: 100%;
    margin: 20px auto 0;
}
.fileTile{
    height: 24px;
    font-size: 24px;
    color: #000;
    text-align: center;
}
.fileName{
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px auto;

}
.fileName img{
    height: 100%;
}
.fileName div{
    width: 81px;
    height: 103px;
    margin: 0 20px;
    border: 2px solid #999;
}

.fileName div:nth-of-type(1):hover{
    border: 2px solid #355F9F;
}
.fileName div:nth-of-type(2):hover{
    border: 2px solid #2A784D;
}
.fileName div:nth-of-type(3):hover{
    border: 2px solid #D34C2C;
}
.fileName div:nth-of-type(4):hover{
    border: 2px solid #EF652A;
}
.acClass1{
 border: 2px solid #355F9F !important;   
}
.acClass2{
 border: 2px solid #2A784D !important; 
}
.acClass3{
border: 2px solid #D34C2C !important; 
}
.acClass4{
 border: 2px solid #EF652A !important;
}
.xFileBtn{
    height: 50px;
    width: 200px;
    font: 20px/50px "微软雅黑";
    color: #fff;
    text-align: center;
    margin: 0 auto;
    background: #007AEF;
    margin-bottom: 20px;
}
.iconFile{
    display:block;
    margin:10px auto 0;
    width:48px;
}
.iconTxt{
    width: 100%;
    display: block;
    margin: 20px auto 0;
    text-align: center;
}
.fileList{
    width: 100%;
    background: #f3f3f3;
}
.fileList li{
    height: 80px;
    width: 100%;
}
.fileList li img:nth-of-type(1){
    height: 36px;
    width: 30px;
    margin-top: 20px;
    margin-left: 30px;
     float: left;
}
.fileList li span:nth-of-type(1){
    font-size: 18px;
    line-height: 80px;
    margin-left: 30px;
    color: #222;
    float: left;
}
.delete{
    height: 24px;
    float: right;
    margin-top: 28px;
    margin-right: 30px;
}
</style>
