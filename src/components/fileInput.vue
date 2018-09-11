<template>
    <div class="inputBox">
        <div class="uploadBox"> 
            <ul  style="width:100%;height:100%;border:1px solid red;">
                <div class="text-center">
                    <img src="../../static/img/pdf.jpg" style="margin-top:30px;">
                    <h4>将需要转换的PDF文件拖放至此<br/></h4><label for="file" ><h4>选择文件</h4></label>
                </div>
            </ul>
            <file-upload
            class="upload"
            post-action="http://localhost:3001/string"
            :multiple="true"
            :drop="true"
            :drop-directory="true"
            v-model="fileList"  
            ref="upload">
            </file-upload>                
        </div>
        <ul class="uploadList" style="margin-bottom:145px;">
            <li v-for="(lis,index) in fileList" :key="index" @mouseover="handleOver(index)" @mouseout="handleLeave(index)">
                <span class="lisName">{{lis.name}}</span>
                <span v-show="lis.transforReady">{{lis.size}}</span>
                <span class="statusBtn" v-show="lis.transforReady">就绪</span>
                <span class="statusTransfor" v-show="lis.transforOver" style="color:#5CB85C;">转换完成</span>
                <span class="statusTransfor" v-show="lis.transforAgain" style="color:#D9534F;">转换失败</span>
                <span class="statusTransfor" v-show="lis.transforIng">正在转换</span>
                <span class="cancel" v-show="lis.transforIng" @click=cancelTransfor(lis) >取消</span> 
                <span class="cancel" v-show="lis.transforAgain" style="background:#0275D8;">重试</span>
                <span class="cancel" v-show="lis.transforOver" style="background:#5CB85C;" e-else>下载</span>
                <img src="../../static/img/delete.png" alt="" class="deleteLis" :class="{disBox: index === current}" @click="delteLis(index)">
                <!-- <div class="progress" ref="progress"></div> -->
                <el-progress :percentage="lis.num" ></el-progress>
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
            <div @click="submitUpload" class="fileTransfor" v-show="fileList.length">开始转换</div>
        </div>
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
                            size: this.size,
                            num: 0,
                            timer: null,
                            transforReady: true, //转换状态 就绪
                            transforIng: false,  // 上传过程
                            transforOver: false, //转换完成
                            transforAgain: false, //重试
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
                                size: this.size,
                                num: 0, //进度条
                                timer: null, // 定时器
                                transforReady: true, //转换状态 就绪
                                transforIng: false,  // 上传过程
                                transforOver: false, //转换完成
                                transforAgain: false, //重试
                                })
                        } else {
                           this.$message.error('文件已上传'); 
                        }
                    } 
                }
            },
            // 上传
            submitUpload() { 
                
                this.fileList.forEach((e,i)=>{
                    e.transforAgain = false; //重试
                    e.transforReady = false;
                    e.transforIng = true; // 上传过程
                    clearInterval(e.timer);
                    e.timer = setInterval(()=>{
                        e.num ++;
                        if(e.num > 99){
                            e.num = 100;
                            clearInterval(e.timer);
                            e.transforIng = false; // 上传过程
                            e.transforOver = true; // 上传完成
                        }
                    },20*(i+1))
                })
                // 请求接口
                // this.axios.post('https://jsonplaceholder.typicode.com/posts/',this.fileList).then((res)=>{
                //     console.log(res);
                // }).catch(
                //     (err)=>{
                //         console.log(err);
                //     }
                // );
                // 上传进度条
                // console.log(fileList)
            },
            // 取消上传
            cancelTransfor(lis) {
                // 取消上传隐藏进度条
                lis.num = 0;
                clearInterval(lis.timer);
                lis.transforIng = false; // 上传过程
                lis.transforAgain = true; //重试
            },
            // 文件上传过程中
            uploadOnProgress(e,file){
                console.log(e);
            },
            beforeAvatarUpload(file) {
                console.log(file);
            }
        }
    }
</script>
<style>
.inputBox{
    height: 100%;
    margin:160px 55px 0;
}
.uploadBox{
    width: 100% !important;
    height:370px;
    border: 1px solid #797979;
    padding: 20px;
    box-sizing: content-box;
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
</style>
