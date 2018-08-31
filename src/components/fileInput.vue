<template>
    <div class="inputBox">
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload($event)">上传到服务器</el-button>
        <el-upload
            class="uploadCont"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList"
            :on-change="handleChange"
            :auto-upload="false"
            ref="upload"
            :before-upload="beforeAvatarUpload"
            :multiple="multiple"
            >
            <div class="minCont">
                <div class="el-upload__text">将需转换的PDF文件拖放至此，或<em>点击上传</em></div>
            </div>
        </el-upload>
        <ul class="uploadList">
            <li v-for="(lis,index) in fileList" :key="index" @mouseover="handleOver" @mouseout="handleLeave">
                <span>{{lis.name}}</span>
                <span>{{lis.size}}</span>
                <span class="statusBtn">就绪</span>
                <img src="../../static/img/delete.png" alt="" class="deleteLis" v-show="disBox">
                <!-- <div class="progress" ref="progress"></div> -->
                <el-progress :percentage="num"></el-progress>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                fileList:[],
                size:0,
                multiple: true, // 多选
                disBox:false, //鼠标移入移出
                fileName: '',
                num:0,
                timer: null,
            }
        },
        mounted() {

        },
        methods:{
            // 鼠标的移入移出
            handleOver() {
                this.disBox = true;
            },
            handleLeave() {
                this.disBox = false;
            },
            handleChange(file,fileList){
                let index = file.raw.type.indexOf('/');
                let fontIndex = file.name.indexOf('.');
                // console.log(file,fontIndex);
                // 文件名字过长处理
                if(fontIndex > 5) {
                    this.name = file.name.substring(0,5) +'...'+'.pdf';
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
                if (!ispdf) {
                this.$message.error('上传只能是 pdf 格式!');
                }
                let arr = [];
                if(ispdf) {
                    // 第一次上传
                    if(this.fileList.length == 0) {
                        this.fileList.push({
                            name: this.name,
                            url: file.url,
                            size: this.size
                        })
                        arr.push(file.name);
                    } else {                    
                        this.fileList.forEach((e,i)=>{
                        arr.push(e.name);
                        });
                        if(arr.indexOf(file.name) === -1) {
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
            submitUpload(ev) { 
                // 请求接口
                // this.$refs.upload.submit();
                // 上传进度条
                this.timer = setInterval(()=>{
                    this.num ++;
                    if(this.num == 99) {
                        clearInterval(this.timer);
                    }
                },50);
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
    border-bottom: 1px solid #333;
}
.uploadList li{
    width: 100%;
    height: 98px;
    border: 1px solid #333;
    border-bottom: none;
    font: 18px/98px "微软雅黑";
    color: #333;
    position: relative;
}
.uploadList li span,.uploadList li img{
    float: left;
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
</style>
