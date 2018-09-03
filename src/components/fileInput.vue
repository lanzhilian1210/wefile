<template>
    <div class="inputBox">
        
        <el-upload
            class="uploadCont"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList"
            :on-change="handleChange"
            :on-progress="uploadOnProgress"
            :auto-upload="false"
            ref="upload"
            :before-upload="beforeAvatarUpload"
            :multiple="multiple"
            >
            <div class="minCont">
                <img src="../../static/img/pdf.jpg" alt="" class="pdf">
                <div class="el-upload__text">将需转换的PDF文件拖放至此<div class="seleTxt">选择文件</div></div>
            </div>
            <el-button size="small" type="primary" v-show="fileList.length">点击上传</el-button>
            <div @click="submitUpload" class="fileTransfor" v-show="fileList.length">开始转换</div>
        </el-upload>
        <ul class="uploadList" style="margin-bottom:145px;">
            <li v-for="(lis,index) in fileList" :key="index" @mouseover="handleOver(index)" @mouseout="handleLeave(index)">
                <span class="lisName">{{lis.name}}</span>
                <span v-show="transfor">{{lis.size}}</span>
                <span class="statusBtn" v-show="transfor">就绪</span>
                <span class="statusTransfor" v-show="!transfor">正在转换</span>
                <span class="cancel" v-show="!transfor" @click=cancelTransfor>取消</span>
                <img src="../../static/img/delete.png" alt="" class="deleteLis" :class="{disBox: index === current}" @click="delteLis(index)">
                <!-- <div class="progress" ref="progress"></div> -->
                <el-progress :percentage="num"></el-progress>
            </li>
        </ul>

        <ul class="uploadList" v-show="otherFileList.length" style="margin-bottom:145px;">
            <div class="listTitle">当前并不支持以下格式转换</div>
            <li v-for="(lis,index) in otherFileList" :key="index" @mouseover="handleOver(index)" @mouseout="handleLeave(index)">
                <span class="lisName">{{lis.name}}</span>
                <span class="statusBtn" style="background:#D9534F;">错误</span>
                <img src="../../static/img/delete.png" alt="" class="deleteLis" :class="{disBox: index === current}" @click="delteOtherLis(index)">
            </li>
        </ul>
        <div class="uploadBtn" v-show="fileList.length" >
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                fileList:[], // 存储pdf类型
                otherFileList:[], //存储非pdf类型文件
                size:0,
                multiple: true, // 多选
                fileName: '',
                num:0,
                timer: null,
                current:-1,
                transfor: false, //转换状态
            }
        },
        methods:{
            // 鼠标的移入移出
            handleOver(index) {
                this.current = index;
            },
            handleLeave(index) {
                this.current = -1;
            },
            // 删除当前li
            delteLis(index) {
                this.fileList.splice(index,1);
                if(this.fileList.length==0&&this.otherFileList.length==0) {
                    this.$emit('getMsg',true); // 子组件给父组件传递状态
                }
            },
            delteOtherLis(index) {
                 this.otherFileList.splice(index,1);
                 if(this.fileList.length==0&&this.otherFileList.length==0) {
                    this.$emit('getMsg',true); // 子组件给父组件传递状态
                }
            },
            handleChange(file,fileList){
                this.$emit('getMsg',false); // 子组件给父组件传递状态
                let index = file.raw.type.indexOf('/');
                let fontIndex = file.name.indexOf('.');
                // console.log(file,fontIndex);
                // 文件名字过长处理
                if(fontIndex > 5) {
                    // this.name = file.name.substring(0,5) +'...'+'.pdf';
                    this.name = file.name;
                } else {
                    this.name = file.name;
                }
                // 文件大小 大于1024kb 用单位MB
                if(file.size/1024 >= 1024) {
                    this.size = Math.floor((file.size/1024)/1024) + 'MB'
                };
                if(file.size/1024 < 1024) {
                    this.size = Math.floor(file.size/1024) + 'KB'
                };               
                // 判断文件类型
                let fileType = file.raw.type.substring(index+1);
                const ispdf = fileType == 'pdf';
                // 非pdf文件类型
                let otherFileListArr = [];
                if (!ispdf) {
                // 第一次上传
                    if(this.otherFileList.length == 0) {
                        this.otherFileList.push({
                            name: this.name,
                            url: file.url,
                            size: this.size
                        })
                        otherFileListArr.push(file.name);
                    } else {                    
                        this.otherFileList.forEach((e,i)=>{
                        otherFileListArr.push(e.name);
                        });
                        if(otherFileListArr.indexOf(file.name) === -1) {
                             this.otherFileList.push({
                                name: this.name,
                                url: file.url,
                                size: this.size
                                })
                        } else {
                           this.$message.error('文件已上传'); 
                        }
                    } 
                }
                // pdf文件类型
                let fileListArr = [];
                if(ispdf) {
                    // 第一次上传
                    if(this.fileList.length == 0) {
                        this.fileList.push({
                            name: this.name,
                            url: file.url,
                            size: this.size
                        })
                        fileListArr.push(file.name);
                    } else {                    
                        this.fileList.forEach((e,i)=>{
                        fileListArr.push(e.name);
                        });
                        if(fileListArr.indexOf(file.name) === -1) {
                             this.fileList.push({
                                name: this.name,
                                url: file.url,
                                size: this.size
                                })
                        } else {
                           this.$message.error('文件已上传'); 
                        }
                    }    
                }
            },
            // 上传
            submitUpload() { 
                // 请求接口
                 this.$refs.upload.submit();
                // 上传进度条
                // console.log(fileList);
                // this.timer = setInterval(()=>{
                //     this.num ++;
                //     if(this.num == 100) {
                //         clearInterval(this.timer);
                //     }
                // },50);
            },
            // 取消上传
            cancelTransfor() {
                clearInterval(this.timer);
                this.num = 0;
            },
            // 文件上传过程中
            uploadOnProgress(e,file){
                console.log(e,file);
            },
            beforeAvatarUpload(file) {
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
.el-upload-list{
    display: none;
}
.uploadList{
    margin: 30px 0;   
}
.uploadList li{
    width: 100%;
    height: 98px;
    border: 1px solid #333;
    font: 18px/98px "微软雅黑";
    color: #333;
    position: relative;
    margin-top: -1px;
}
.uploadList li:nth-of-type(1){
    margin-top: 0;
}
.uploadList li span,.uploadList li img{
    float: left;
}
.deleteLis{
    height: 25px;
    width: 25px;
    display: none;
}
.uploadList li span:nth-of-type(1){
    margin-left: 5%;
}
.uploadList li span:nth-of-type(2){
        position: absolute;
        right: 28%;
}
.uploadList li img{
    position: absolute;
    top:36px;
    right: 4%;
}
.statusBtn{
    position: absolute;
    right: 54%;
    top: 34px;
}
.statusBtn{
    height: 31px;
    padding: 0 10px;
    background: #0275D8;
    color: #fff;
    border-radius: 3px;
    font: 14px/31px "微软雅黑";
    cursor: pointer;
}
.progress{
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    bottom: -1px;
    background: red;
}
/* 进度条 */
.el-progress{
    height: 3px;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    display: block;
    z-index: 9;
}
.el-progress-bar{
    position: absolute;
    padding-right: 0;
    left: 0;
}
.el-progress__text{
    display: none;
}
.disBox{
    display: block;
}
.el-progress-bar__outer{
    background: transparent;
}
.pdf{
    width: 64px;
    height: 64px;
    margin:20px auto;
}
.el-upload__text{
    height: 28px;
    font: 24px/28px "微软雅黑" !important;
    color: #333;
}
.seleTxt{
    margin-top: 30px;
}
.listTitle{
    height: 28px/30px "微软雅黑";
    color: #333;
    text-align: center;
    font-weight: 600;
    margin:20px 0;
}
.lisName{
    overflow: hidden;
}
.uploadBtn{
    height: 110px;
    width: 1140px;
    position: fixed;
    bottom: 0;
    left: 50%;
    margin-left: -570px;
    z-index: 10;
    background: #F9F9F9;
}
.fileTransfor{
    width: 200px;
    height: 52px;
    background: #0275D8;
    font:20px/52px "微软雅黑";
    color: #fff;
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    margin-right: 35px;
    cursor: pointer;
    position: fixed;
    display: inline-block;
    border-radius: 5px;
    right: 100px;
    bottom: 22px;
    z-index: 11;
}
.el-button--primary{
   width: 200px;
    height: 52px;
    background: #fff;
    font:20px/52px "微软雅黑";
    color: #606266;
    text-align: center;
    position: fixed;
    display: inline-block;
    border-radius: 5px;
    left: 100px;
    bottom: 22px;
    z-index: 11;
    border: 1px solid #DCDFE6;
    margin-right: 35px;
}
.el-button--primary span{
    float: left;
    margin-top: -9px;
    margin-left: 40px;
}
.statusTransfor{
    position: absolute;
    right: 50%;
}
.cancel{
    position: absolute;
    right: 20%;
    width: 65px;
    height: 32px;
    background: #FF2968;
    font: 18px/32px "微软雅黑";
    color: #fff;
    text-align: center;
    top: 34px;
    cursor: pointer;
}
</style>
