<template>
    <div class="inputBox">
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
        <el-upload
            class="uploadCont"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            :file-list="fileList"
            :on-change="handleChange"
             :auto-upload="false"
             ref="upload"
             :before-upload="beforeAvatarUpload"
            :multiple="true"
            >
            <div class="minCont">
                <i class="el-icon-upload"></i>
            <div class="el-upload__text">将需转换的PDF文件拖放至此，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </div>
        </el-upload>
        <ul>
            <li v-for="(lis,index) in fileList" :key="index">
                <span>{{lis.name}}</span>
            </li>
        </ul>
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
                let index = file.raw.type.indexOf('/');
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
                            name: file.name,
                            url: file.url,
                            size: file.size
                        })
                        arr.push(file.name);
                    } else {                    
                        this.fileList.forEach((e,i)=>{
                        arr.push(e.name);
                        });
                        if(arr.indexOf(file.name) === -1) {
                             this.fileList.push({
                                name: file.name,
                                url: file.url,
                                size: file.size
                                })
                        } else {
                           this.$message.error('文件已上传'); 
                        }
                    }    
                }
            },
            submitUpload() { 
                // 请求接口
                console.log(this.fileList);
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
</style>
