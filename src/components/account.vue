<template>
    <div>
        <div class="userAccountItems">
            <div class="userAccountitem1">
                <div class="acountInfo">账号设置</div>
                <div>完整的信息有助于更好的使用服务</div>
            </div>
            <div class="userAccountitem2">
                <div class="userL">头像</div>
                <img :src="imgSrc">
                <div class="changeInfo">修改</div>
                <input type="file" class="uploadImg" @change="handleUploadImg($event)">
            </div>
            <!-- 更改称呼 -->
            <div class="userAccountitem2" v-show="!isDisplayName">
                <div class="userL">称呼</div>
                <span class="userInfo1">{{name}}</span>
                <div class="changeInfo" @click="changInfo">修改</div>
            </div>
            <div class="userAccountitem4" style="height:145px;" v-show="isDisplayName">
                <div class="userL" >称呼</div>
                <div class="cancelName" @click="cancelChangeInfo">取消</div>
                <div class="changeName">
                    <input type="text" v-model="name">
                    <div @click="subChangeInfo">确认修改</div>
                </div>
            </div>
            <!-- 手机号绑定之前 -->
            <div class="userAccountitem3" v-show="!isDisplayPhone">
                <div class="userL">手机号</div>
                <div class="phone">{{phone}}</div>
                <div class="userR" @click="changPhone" v-show="!phone">立即绑定</div>
            </div>
            <!-- 绑定手机号 -->
            <div class="userAccountitem4" v-show="isDisplayPhone">
                <div class="itemPhoneTop" style="height:80px;">
                    <span class="titlePhone">手机号</span>
                    <el-select v-model="value" placeholder="请选择">
                        <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                        </el-option>
                    </el-select>
                    <input type="text" class="subPhone" placeholder="请输入手机号" v-model="phone">
                    <button class="getCode" @click="handleCode(phone)" :disabled="isDisable">{{testMobile}}</button>
                    <div class="cancelPhone" @click="cancelPhone">取消</div>
                </div>
                <div class="itemPhoneBt" style="width:100%;">
                   <div style="height:80px;">
                       <span class="titlePhone">验证码</span>  
                   <input type="text" class="subCode" placeholder="请输入验证码" v-model="subCode">
                   </div>
                   <div class="savePhone" @click="subChangePhone">保存</div>
                </div>  
            </div>
            <!-- 邮箱 -->
            <!-- 邮箱绑定之前 -->
            <div class="userAccountitem3" v-show="!isDisplayEmail">
                <div class="userL">邮箱号</div>
                <div class="phone">{{newEmail}}</div>
                <div class="userR" @click="changEmail" v-show="!newEmail">立即绑定</div>
            </div>
            <div class="userAccountitem4" v-show="isDisplayEmail">
                <div class="itemPhoneTop" style="height:80px;">
                    <span class="titlePhone">邮箱号</span>
                    <input type="text" class="subPhone" placeholder="请输入邮箱号" v-model="email">
                    <button class="getCode" @click="handleEmailCode" :disabled="isDisable">{{testMobile}}</button>
                    <div class="cancelPhone" @click="cancelEmail">取消</div>
                </div>
                <div class="itemPhoneBt" style="width:100%;">
                   <div style="height:80px;">
                       <span class="titlePhone" >验证码</span>  
                   <input type="text" class="subCode" placeholder="请输入验证码" v-model="subCode">
                   </div>
                   <div class="savePhone" @click="saveEmail">保存</div>
                </div>  
            </div>

<!-- 微信 -->
            <div class="userAccountitem5" v-show="!isDisplayWx">
                <div class="userL">微信</div>
                <div class="userR" @click="addWx">立即绑定</div>
            </div>
            <!-- 微信绑定 -->
            <div class="userAccountitem4" v-show="isDisplayWx">
                <div class="lessonWx">打开 “微信” -> “扫一扫”</div>
                <div class="cancelWx" @click="cancelWx">取消</div>
                <div class="wxBox">
                    <span>微信</span>
                    <img src="" alt="">
                </div>
            </div>
            <!-- 密码 -->
            <div class="userAccountitem2" v-show="!isDisplayPass">
                <div class="userL">密码</div>
                <p class="msgNum">{{passWord}}</p>
                <div class="changeInfo" @click="changePass">修改</div>
            </div>
            <!-- 修改密码 -->
            <div class="userAccountitem6" v-show="isDisplayPass">
                <div class="userPass">密码</div>
                <div class="cancelPass" @click="cancelPass">取消</div>
                <div class="userPassIps">
                    <input type="text" placeholder="输入新密码" v-model="changePassNum" @blur="testPass">
                    <input type="text" placeholder="确认密码" v-model="changeNewPass"> 
                    <div class="savePass" @click="saveNewPass">保存</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isDisable:false,
            name:'鲁先生',
            phone:'',
            subCode:'',
            imgSrc:'../../static/img/upload.jpg', //头像
            isDisplayName:false, //称呼
            isDisplayPhone:false, //电话号
            isDisplayEmail:false,
            isDisplayWx:false, // 微信
            email:123123,
            passWord:'',
            isDisplayPass:false, //密码
            options: [{
                    value: '选项1',
                    label: '中国大陆(+86)'
                    }, {
                    value: '选项2',
                    label: '台湾(+886)'
                    }, {
                    value: '选项3',
                    label: '香港(+852)'
                    }, {
                    value: '选项4',
                    label: '澳门(+853)'
                    }],
            value:'',
            timer:null,
            changePassNum:'',
            changeNewPass:'',
            auth_time:60,
            newEmail:'',
            testMobile:'获取验证码',
        }
    },
    mounted() {
        this.getUserInfo();
    },
    methods:{
        // 获取信息
        getUserInfo() {
            this.axios.get('/user/info').then(res=>{
                // console.log(res.data.data);
                if(!res.data.data.avatar){
                     this.imgSrc =  this.imgSrc
                } else {
                this.imgSrc = res.data.data.avatar;
                }
                this.name = res.data.data.nick_name;
                this.phone = res.data.data.phone_num;
                this.email = res.data.data.email;
                this.passWord = res.data.data.password;
            }).catch(err=>{
                console.log(err);
            })
        },
        // 上传图片
        handleUploadImg(e){
            let file = e.target.files[0];
            if(file) {
                let that = this;
                let reader = new FileReader()
                reader.readAsDataURL(file)
                reader.onload= function(e){
                    that.imgSrc = e.target.result;
                }
            };
            console.log(this.imgSrc)
        },
        // 修改称呼
        changInfo() {
            this.isDisplayName = true;
        },
        // 确认修改称呼
        subChangeInfo() {
            let data = {
                type_update:1,
                nick_name: this.name
            };
            this.axios.post('/user/update',data).then(res=>{
                if(res.data.code == '200') {
                    alert('姓名更新成功!'); 
                } else {
                    alert('姓名更新失败!');
                }
                this.isDisplayName = false;
            }).catch(err=>{
                console.log(err);
            })
            
        },
        cancelChangeInfo() {
            this.isDisplayName = false;
        },
        // 绑定手机号
        changPhone() {
           this.isDisplayPhone = true;
        },
        //保存修改手机号
        subChangePhone() {
            if(!(/^1(3|4|5|7|8)\d{9}$/.test(this.phone))){
                this.$message({
                    type: 'warning',
                    message: '手机号码有误，请重填'
                    });  
                return false; 
            }  else {
                // 请求接口
                let regLabel = '';
                if(!this.label){
                    regLabel = '+86';
                } else {
                    regLabel = this.label
                }
                let phone_num = regLabel+this.phone;
                let data = {
                    type_update:3,
                    phone_num:phone_num,
                    verify_code:this.subCode
                }
                this.axios.post('/user/update', data).then(res=>{
                    if(res.data.code == '200') {
                        this.$message({
                        type: 'success',
                        message: '手机号码绑定成功'
                        });
                        this.phone = phone_num;
                       this.isDisplayPhone = false;
                    }
                    if(res.data.code == '405') {
                        alert(res.data.detail)
                    }
                }).catch(err=>{
                    console.log(err)
                })   
            }  
        },
        // 手机验证码
            handleCode(phone) {
                this.isDisable = true;
                let regLabel = '';
                if(!this.label){
                    regLabel = '+86';
                } else {
                    regLabel = this.label
                }
                let phone_num = regLabel+phone;
                let data = {
                    phone_num:phone_num
                }
                this.axios.post('/user/sms', data).then(res=>{
                    if(res.data.code == '200') {
                        this.timer = setInterval(()=>{
                            this.auth_time --;
                            this.testMobile = this.auth_time + 's';
                            if (this.auth_time <= 0) {
                                this.testMobile = '重发验证码';
                                this.auth_time = 60;
                                this.isDisable = false;
                                clearInterval(this.timer);
                            }
                        },1000)
                    } else {
                        this.testMobile = '重发验证码';
                        this.isDisable = false;
                    }
                    console.log(res);
                }).catch(err=>{
                    alert('服务器错误')
                });
            },
        // 绑定邮箱号
        changEmail() {
            this.isDisplayEmail = true;  
        },
        cancelEmail() {
            this.isDisplayEmail = false;  
        },
        // 邮箱验证码
            handleEmailCode() {
                let reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$"); 
                if(!reg.test(this.email)) {
                    this.$message({
                        type: 'warning',
                        message: '邮箱账号有误，请重填'
                        });  
                    this.email = '';
                    return false;   
                } else {
                this.isDisable = true;
                let data = {
                    email:this.email
                }
                this.axios.post('/user/email', data).then(res=>{
                    if(res.data.code == '200') {
                        this.timer = setInterval(()=>{
                            this.auth_time --;
                            this.testMobile = this.auth_time + 's';
                            if (this.auth_time <= 0) {
                                this.testMobile = '重发验证码';
                                this.auth_time = 60;
                                this.isDisable = false;
                                clearInterval(this.timer);
                            }
                        },1000)
                    } else {
                        this.testMobile = '重发验证码';
                        this.isDisable = false;
                    }
                    console.log(res);
                }).catch(err=>{
                    alert('服务器错误')
                });
            }
            },
        // 保存邮箱
        saveEmail() {
                let data = {
                    type_update:2,
                    email:this.email,
                    verify_code:this.subCode
                };
                this.axios.post('/user/update', data).then(res=>{
                    if(res.data.code == '200') {
                        this.$message({
                        type: 'success',
                        message: '邮箱号码绑定成功'
                        });
                       this.newEmail = this.email;
                       this.isDisplayPhone = false;
                    }
                    if(res.data.code == '405') {
                        alert(res.data.detail)
                    }
                }).catch(err=>{
                    console.log(err)
                })
        },
        // 取消修改手机号
        cancelPhone() {
           this.isDisplayPhone = false;  
        },
        // 绑定微信
        addWx(){
            this.isDisplayWx = true;
        },
        cancelWx() {
            this.isDisplayWx = false;
        },
        // 修改密码
        changePass() {
            if(this.changeNewPass !== this.changePassNum) {
                this.$message({
                    type: 'warning',
                    message: '两次输入的密码不一致'
                    });
                return false; 
            } else {
                this.isDisplayPass = true;
            }
            
        },
        // 密码正则校验
        testPass() {
            let  password = this.changePassNum;
            let myreg=/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)(?![\W_]+$)\S{6,15}$/
            if(!(myreg.test(password))){ 
                this.$message({
                    type: 'warning',
                    message: '密码长度6-15位,且由字母和数字组成'
                    });
                return false; 
            } 
        },
        //取消修改密码
        cancelPass() {
            this.isDisplayPass = false;
        },
        saveNewPass() {
            let data = {
                type_update:2,
                email:this.email,
            };
            this.axios.post('/user/update', data).then(res=>{

            }).catch(err=>{

            })
             this.isDisplayPass = false;
        }

    }
}
</script>
<style lang="">
    .phone,.subEmail{
        float: left;
        font: 18px/80px "\5FAE\8F6F\96C5\9ED1";
        margin-left: 40px;
        outline: none;
        border: none;
    }
    .userAccountItems{
        width: 840px;
        border-left: 1px solid #e4e4e4;
        margin: 0 auto 30px;

    }
    .userAccountitem1{
        height: 120px;
        border-bottom: 1px solid #e4e4e4;
        overflow: hidden;
    }
    .acountInfo{
        height:28px;
        font:28px/28px "微软雅黑";
        margin-left:90px;
        margin-top: 30px;
    }
    .userAccountitem1 div:nth-of-type(2){
        height:14px;
        font:14px/14px "微软雅黑";
        margin-left:90px;
        margin-top: 30px;
    }
    .userAccountitem2{
        height: 90px;
        padding-bottom: 10px;
        margin-left: 90px;
        border-bottom: 1px solid #e4e4e4;
        position: relative;
    }
    .userAccountitem3{
        height: 70px;
         padding-bottom: 10px;
        margin-left: 90px;
        border-bottom: 1px solid #e4e4e4;
    }
    .userL{
        float: left;
        font: 18px/80px "微软雅黑";
        color: #000;
        display: inline;
    }
    .userAccountitem2 img{
        float: left;
        height: 58px;
        width: 58px;
        margin: 10px 0 0 70px;
        border-radius: 50%;
    }
    .changeInfo{
        float: right;
        font: 14px/80px "微软雅黑";
        color: #007aef;
        margin-right: 20px;
        cursor: pointer;
    }
    .uploadImg{
        position: absolute;
        right: 0;
        top: 30px;
        width: 50px;
        opacity: 0;
        cursor: pointer;
    }
    .userPass{
        height: 220px;
        float: left;
        font: 18px/220px "微软雅黑";
    }
    .cancelPass{
        float:right;
        font: 14px/14px "微软雅黑";
        float: right;
        color: #007aef;
        margin-top: 8px;
        margin-right: 10px;
    }
    .cancelName{
        float:right;
        font: 14px/14px "微软雅黑";
        float: right;
        color: #007aef;
        margin-top: 8px;
        margin-right: 10px;
        cursor: pointer;
    }
    .userInfo1{
       font: 14px/80px "微软雅黑";
       margin-left: 70px;
       display: inline;
    }
    .changeName{
        display: inline-block;
        margin-left: 70px;
        margin-top: 15px;
    }
    .changeName input{
        display: block;
        width: 320px;
        height: 38px;
        outline: none;
        font: 14px/38px "微软雅黑";
        padding-left: 20px;
    }
    .changeName div{
        display: block;
        width: 344px;
        height: 38px;
        font: 14px/38px "微软雅黑";
        text-align: center;
        background: #007aef;
        color: #fff;
        margin-top: 10px;
        cursor: pointer;
    }
    .userR{
        float: left;
        font: 18px/80px "微软雅黑";
        color: #000;
        margin-left: 70px;
        color: #007aef;
        cursor: pointer;
    }
    .userAccountitem4{
        height: 270px;
        margin-left: 90px;
        border-bottom: 1px solid #e4e4e4;
    }
    .userAccountitem6{
        height: 240px;
        margin-left: 90px;
        border-bottom: 1px solid #e4e4e4;
    }
    .titlePhone{
        float: left;
        font: 18px/80px "微软雅黑";
        color: #000;
        display: inline;
    }
    .el-select{
        width: 96px;
        margin: 20px 20px 0;
        float: left;
    }
    .subPhone{
        height: 36px;
        outline: none;
        border: 1px solid #e4e4e4;
        margin-left: 20px;
        margin-top: 20px;
        width: 300px;
        font: 14px/36px "微软雅黑";
        float: left;
    }
    .getCode{
        display:inline-block;
        width: 120px;
        height: 38px;
        border: 1px solid #e4e4e4;
        margin-left: 20px;
        margin-top: 20px;
        text-align: center;
        font: 14px/36px "微软雅黑";
        float: left;
    }
    .cancelPhone{
        float:right;
        font: 14px/14px "微软雅黑";
        float: right;
        color: #007aef;
        margin-top: 8px;
        margin-right: 10px;
        cursor: pointer;
    }
    .subCode{
        height: 38px;
        width: 300px;
        border: 1px solid #e4e4e4;
        font: 14px/36px "微软雅黑";
        float: left;
        margin: 20px 20px 0;
        outline: none;
    }
    .savePhone{
        height: 40px;
        width: 300px;
         font: 14px/36px "微软雅黑";
         margin-top: 20px;
         text-align: center;
         background: #007aef;
         color: #fff;
         margin-left: 72px;
    }
    .userAccountitem5{
        height: 80px;
        margin-left: 90px;
        border-bottom: 1px solid #e4e4e4;
    }
    .msgNum{
         font: 14px/80px "微软雅黑";
         margin-left: 30px;
         float: left;
    }
    .lessonWx{
        height: 14px;
        font: 14px/14px "微软雅黑";
        margin-left: 90px;
        margin-top: 40px;
        color: #999;
    }
    .cancelWx{
        float: right;
        margin: 40px;
        color: #007aef;
    }
    .wxBox{
        height: 200px;
        margin-top: 30px;
    }
    .wxBox span{
        font: 16px/200px "微软雅黑";
        height: 200px;
        color: #000;
        float: left;
    }
    .wxBox img{
        height: 200px;
        width: 200px;
        margin-left: 30px;
        float: left;
    }
    .userPassIps{
        float: left;
        margin-left: 30px;
        height: 220px;
    }
    .userPassIps input{
        height: 36px;
        width: 460px;
        border:1px solid #e4e4e4;
        display: block;
        margin-top: 30px;
    }
    .userPassIps input:nth-of-type(1){
        margin-top: 50px;
    }
    .savePass{
        height: 40px;
        width: 460px;
         font: 16px/46px "微软雅黑";
         text-align: center;
         background: #007aef;
         color: #fff;
         margin-top: 30px;
    }
</style>