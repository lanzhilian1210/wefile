<template>
    <div>
        <div class="userAccountItems">
            <div class="userAccountitem1">
                <!-- <div class="acountInfo">账号设置</div>
                <div>完整的信息有助于更好的使用服务</div> -->
            </div>
            <div class="userAccountitem2">
                <div class="userL">头像</div>
                <img src="../../static/img/1.jpg" alt="">
                <div class="changeInfo">修改</div>
            </div>
            <!-- 更改称呼 -->
            <div class="userAccountitem2" v-show="!isDisplayName">
                <div class="userL">称呼</div>
                <span class="userInfo1">陆先生</span>
                <div class="changeInfo" @click="changInfo">修改</div>
            </div>
            <div class="userAccountitem4" style="height:145px;" v-show="isDisplayName">
                <div class="userL" >称呼</div>
                <div class="cancelName" @click="cancelChangeInfo">取消</div>
                <div class="changeName">
                    <input type="text">
                    <div @click="subChangeInfo">确认修改</div>
                </div>
            </div>
            <!-- 手机号绑定之前 -->
            <div class="userAccountitem3" v-show="!isDisplayPhone">
                <div class="userL">手机号</div>
                <div class="userR" @click="changPhone">立即绑定</div>
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
                    <input type="text" class="subPhone" placeholder="请输入手机号">
                    <div class="getCode">获取验证码</div>
                    <div class="cancelPhone" @click="cancelPhone">取消</div>
                </div>
                <div class="itemPhoneBt" style="width:100%;">
                   <div style="height:80px;">
                       <span class="titlePhone">验证码</span>  
                   <input type="text" class="subCode" placeholder="请输入验证码">
                   </div>
                   <div class="savePhone" @click="subChangePhone">保存</div>
                </div>  
            </div>
            <div class="userAccountitem5">
                <div class="userL">邮箱</div>
                <p class="msgNum">123123123</p>
                <div class="changeInfo">修改</div>
            </div>
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
                <p class="msgNum">123123123</p>
                <div class="changeInfo" @click="changePass">修改</div>
            </div>
            <!-- 修改密码 -->
            <div class="userAccountitem6" v-show="isDisplayPass">
                <div class="userPass">密码</div>
                <div class="cancelPass" @click="cancelPass">取消</div>
                <div class="userPassIps">
                    <input type="text" placeholder="输入新密码">
                    <input type="text" placeholder="确认密码">
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
            isDisplayName:false, //称呼
            isDisplayPhone:false, //电话号
            isDisplayWx:false, // 微信
            isDisplayPass:false, //密码
        }
    },
    methods:{
        // 修改称呼
        changInfo() {
            this.isDisplayName = true;
        },
        // 确认修改
        subChangeInfo() {
            this.isDisplayName = false;
        },
        cancelChangeInfo() {
            this.isDisplayName = false;
        },
        // 绑定手机号
        changPhone() {
           this.isDisplayPhone = true;
        },
        //保存修改
        subChangePhone() {
             this.isDisplayPhone = false;
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
            this.isDisplayPass = true;
        },
        //取消修改密码
        cancelPass() {
            this.isDisplayPass = false;
        },
        saveNewPass() {
             this.isDisplayPass = false;
        }

    }
}
</script>
<style lang="">
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
    }
    .changeInfo{
        float: right;
        font: 14px/80px "微软雅黑";
        color: #007aef;
        margin-right: 20px;
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