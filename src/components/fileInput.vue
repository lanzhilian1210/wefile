<template>
    <div class="inputBox">
        <div class="uploadBox"> 
            <file-upload
                class="upload"
                post-action="http://localhost:3000/users/bar"
                :multiple="true"
                :drop="true"
                :drop-directory="true"
                v-model="fileList" 
                @input-file="inputFile" 
                @input-filter="inputFilter"
                ref="upload" style="width:100%;height:100%;">
                <div class="txtDis">将PDF与Office文件互相转换</div>
                <div class="txtDis2">选择文件</div>
            </file-upload>                
        </div>
        <ul class="uploadList" >
            <li v-for="(lis,index) in fileList" :key="index">
                <span class="lisName">{{lis.name}}</span>
                <span v-show="lis.transforReady">{{lis.size | formatSize(lis.size)}}</span>
                <span class="statusBtn" v-show="lis.transforReady">就绪</span>
                <span class="statusTransfor" v-show="lis.transforOver" style="color:#5CB85C;">转换完成</span>
                <span class="statusTransfor" v-show="lis.transforAgain" style="color:#D9534F;">转换失败</span>
                <span class="statusTransfor" v-show="lis.transforIng">正在转换</span>
                <span class="cancel" v-show="lis.transforIng" @click=cancelTransfor(lis) >取消</span> 
                <span class="cancel" v-show="lis.transforAgain" style="background:#0275D8;">重试</span>
                <span class="cancel" v-show="lis.transforOver" style="background:#5CB85C;" e-else>下载</span>
                <img src="../../static/img/delete.png" alt="" class="deleteLis" @click="delteLis(index)">
                <!-- <div class="progress" ref="progress"></div> -->
                <el-progress :percentage="progress" ></el-progress>
            </li>
            <div class="addFdf">
                <file-upload
                    class="btn btn-primary"
                    post-action="http://localhost:3000/users/bar"
                    :multiple="true"
                    :drop="true"
                    :drop-directory="true"
                    v-model="fileList"
                    @input-filter="inputFilter"
                    @input-file="inputFile"
                    ref="upload">
                    选择文件
                </file-upload>

            </div>
        </ul>
        <div class="chooseFileBox">
            <div class="fileTile">选择需要的文件</div>
            <div class="fileName">
                <img src="../../static/img/2.jpg" alt="">
                <img src="../../static/img/3.jpg" alt="">
                <img src="../../static/img/4.jpg" alt="">
                <img src="../../static/img/5.jpg" alt="">
            </div>
            <div class="xFileBtn">开始转换</div>
        </div>
        <ul class="uploadList" v-show="otherFileList.length" style="margin-bottom:145px;">
            <div class="listTitle">当前并不支持以下格式转换</div>
            <li v-for="(lis,index) in otherFileList" :key="index">
                <span class="lisName">{{lis.name}}</span>
                <span class="statusBtn" style="background:#D9534F;">错误</span>
                <img src="../../static/img/delete.png" alt="" class="deleteLis" @click="delteOtherLis(index)">
            </li>
        </ul>
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
                multiple: true, // 多选
                fileName: '',
                current:-1,
                currentShow:-1,
                progress: 0,
            }
        },
        methods:{
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
            // 文件过滤
            inputFilter(newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                // 添加文件
                // 过滤非图片文件
                // 不会添加到 files 去
                    if (/\.(jpeg|jpe|jpg|png|webp|html)$/i.test(newFile.name)) {
                        this.otherFileList.push(newFile);
                        return prevent();
                    }
                    newFile.transforReady = true;
                    newFile.transforIng = false; // 上传过程
                    newFile.transforOver = false; //转换完成
                    newFile.transforAgain = false; //重试
                }
            },
            // input-file 事件
            // 上传文件
            inputFile(newFile, oldFile) {
                if (newFile && oldFile) {
                    
                    // update
                    if (newFile.active && !oldFile.active) {
                    // beforeSend
                    // min size
                        if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
                            this.$refs.upload.update(newFile, { error: 'size' })
                        }
                    }
                    if (newFile.progress !== oldFile.progress) {
                    // progress
                    // console.log('progress', newFile.progress, newFile);
                        this.progress = Number(newFile.progress);
                        this.fileList.forEach((e,i)=>{
                            e.transforAgain = false; //重试
                            e.transforReady = false;
                            e.transforIng = true; // 上传过程
                        })
                        console.log(this.fileList);
                    }
                    if (newFile.error && !oldFile.error) {
                        console.log('error');
                        console.log(this.fileList);
                    }
                    if (newFile.success && !oldFile.success) {
                        console.log('success');
                        this.fileList.forEach((e,i)=>{
                            e.transforAgain = false; //重试
                            e.transforReady = false;
                            e.transforIng = false; // 上传过程
                             newFile.transforOver = true; //转换完成
                        })
                    }
                }
                if (!newFile && oldFile) {
                    // remove
                    if (oldFile.success && oldFile.response.id) {
                    // $.ajax({
                    //   type: 'DELETE',
                    //   url: '/upload/delete?id=' + oldFile.response.id,
                    // })
                    }
                }
            },
            // 上传
            submitUpload() { 
                this.$refs.upload.active = true;
            },
            // 取消上传
            cancelTransfor(lis) {
                lis.transforIng = false; // 上传过程
                lis.transforAgain = true; //重试
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
    border: 1px solid red;
}
.uploadBox{
    width: 100% !important;
    height:300px;
    /* background: #007AEF; */
}
.text-center h4{
    height: 40px;
    font:28px/40px "微软雅黑";
    color: #000;
    margin-top: 10px;
}
.uploadList{
    margin: 30px 0;   
}
.uploadList li{
    width: 100%;
    height: 98px;
    border: 1px solid #e0e0e0;
    font: 18px/98px "微软雅黑";
    color: #333;
    border-radius: 5px;
    position: relative;
    margin-top: -1px;
}
.uploadList li:nth-of-type(1){
    margin-top: 0;
}
.deleteLis{
    height: 25px;
    width: 25px;
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
    position: absolute !important;
    left: 0;
    bottom: 0;
    width: 100%;
    display: block;
    z-index: 9;
}
.el-progress-bar{
    position: absolute !important;
    padding-right: 0 !important;
    left: 0;
}
.el-progress__text{
    display: none !important;
}
.disBox{
    display: block;
}
.el-progress-bar__outer{
    background: transparent !important;
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
    display: inline-block;
    border-radius: 5px;
    float: right;
    margin: 36px;
}
/* .file-uploads{
    position: fixed !important;
    left: 100px;
    bottom: 22px;
    z-index: 11;
    width: 200px;
    height: 52px;
    background: #0275D8;
    font:20px/52px "微软雅黑";
    color: #fff;
    text-align: center;
    display: inline-block;
    border-radius: 5px;
    cursor: pointer;
} */
.clickBtn{
   width: 200px;
    height: 52px;
    background: #fff;
    font:20px/52px "微软雅黑";
    color: #606266;
    text-align: center;
    position: fixed;
    display: inline-block;
    border-radius: 5px;
    left: 256px;
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
    border-radius: 5px;
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
    margin-right: 20px;
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
</style>
