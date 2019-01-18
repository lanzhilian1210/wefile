<template>
    <div class="inputBox">
        <div class="uploadBox"> 
            <el-upload
                class="upload-demo"
                drag
                ref="upload"
                :auto-upload="false"
                :show-file-list="false"
                :before-upload="beforeAvatarUpload"
                :on-error="handleError"
                :file-list="fileNewList"
                :on-success="handleSuccess"
                :on-change="handleChange"
                :on-progress="handleProgress"
                :on-remove="handleRemove"
                :action="host"
                :data="ossParams"
                multiple>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>               
        </div>
        <ul class="fileList">
            <li v-for="(item,index) in fileNewList" :key="index" @mouseenter="handleEnter(index)" @mouseleave="handleLeave(index)">
                <div class="progress" :style="{'width':progress+'%'}"></div>
                <img src="../../static/img/word.png" alt=""><span>{{item.name}}</span><img src="../../static/img/delete.png" class="delete" @click="deleteLis(index)" :class="{'deleteActive': isDisplayDel === index}">
            </li>
        </ul>
        <div>以下文件不支持上传</div>
        <ul class="fileList">
            <li v-for="(item,index) in otherFileList" :key="index" @mouseenter="handleEnter(index)" @mouseleave="handleLeave(index)">
                <img src="../../static/img/word.png" alt=""><span>{{item.name}}</span><img src="../../static/img/delete.png" class="delete" @click="deleteOtherLis(index)" :class="{'deleteActive': isDisplayDel === index}">
            </li>
        </ul>
        <div @click="submitUpload">上传至服务器</div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                fileNewList:[],// 存储pdf类型
                otherFileList:[], //存储非pdf类型文件
                isDisplayDel:-1,
                size:0,
                fileName: '',
                current:-1,
                currentShow:-1,
                progress: 0,
                chooseIndex: 0,
                hasChooseFileBox:false,
                host:'', // oss 地址
                dir: '',
                expire:'',
                ossParams:{
                    'success_action_status': '200', // 默认200
                    'signature': '',
                    'policy':'',
                    'OssAccessKeyId': '',
                    'key':'',
                    'callback':'',
                },
            }
        },
        mounted() {
            this.getOssSign();
        },
        methods:{
            handleEnter(index){
                this.isDisplayDel = index;
            },
            handleLeave(index){
                this.isDisplayDel = -1;
            },
            // 删除
            deleteLis(index) {
                this.fileNewList.splice(index,1)
            },
            deleteOtherLis(index) {
                this.otherFileList.splice(index,1)
            },
            // 获取oss签名
            getOssSign() {
                this.axios.get('/upload/sign').then(res=>{
                    this.host = 'http://' + res.data.data.host;
                    this.ossParams.OssAccessKeyId = res.data.data.accessid;
                    this.dir = res.data.data.dir;
                    this.ossParams.signature = res.data.data.signature;
                    this.ossParams.callback = res.data.data.callback;
                    this.ossParams.policy = res.data.data.policy;
                    this.expire = res.data.data.expire;
                }).catch(err=>{
                    console.log(err)
                })
            },
            handleProgress(event, file, fileList){
                this.progress = file.percentage;
                console.log(file.percentage);
            },
            beforeAvatarUpload(file) {
                console.log(file);
                let index = file.name.lastIndexOf("\.");
                let named = file.name.substring(index+1,file.name.length);
                // 非pdf类型文件不能上传
                if(named != 'pdf') {
                    this.$message({
                        type: 'warning',
                        message: '请上传pdf类型的文件'
                        });
                    return false;
                }
                this.ossParams.key = this.dir + file.name;
            },
            // 获取文件后缀
            handleChange(file, fileList){
                // console.log(fileList)
                fileList.forEach((e,i)=>{
                    let index = e.name.lastIndexOf("\.");
                    let named = e.name.substring(index+1,e.name.length);
                    if(named == 'pdf') {
                        if(this.fileNewList.indexOf(e) == -1) {
                            this.fileNewList.push(e)
                        }
                    } else {
                        if(this.otherFileList.indexOf(e) == -1) {
                            this.otherFileList.push(e)
                        }
                    }
                })
                // console.log(this.fileNewList,'pdf');
                // console.log(this.otherFileList,'other')
            },
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handleSuccess(response, file, fileList){
                // console.log(response)
            },
            // 上传失败
            handleError(err, file, fileList){
                console.log('err',file );
                this.$message.warning('上传功能出了点问题，请重试');
            },
            // 上传文件至服务器
            submitUpload() {
            //   console.log(this.ossParams);
                this.$refs.upload.submit();
            },


        }
    }
</script>
<style>
.progress{
    height: 1px;
    width: 100%;
    background:#007AEF;
    position: absolute;
    left: 0;
    top: 0;
}
.inputBox{
    margin:160px 40px 0;
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
    position: relative;
    margin-bottom: 10px;
}
.fileList li img:nth-of-type(1){
    width: 30px;
    margin-top: 20px;
    margin-left: 30px;
     float: left;
}
.fileList li span:nth-of-type(1){
    font-size: 18px;
    line-height: 80px;
    margin-left: 20px;
    color: #222;
    float: left;
}
.delete{
    height: 24px;
    float: right;
    margin-top: 28px;
    margin-right: 30px;
    display: none;
}
.deleteActive{
    display: block;
}
.upload-demo{
  height: 300px;
}
.el-upload,.el-upload-dragger{
  height: 100%;
  width: 100%;
}
.el-upload-list__item{
  height: 60px;
  line-height: 60px;
  font-size: 16px;
}
.el-icon-close{
  font-size: 20px;
  top: 20px !important;
}
</style>
