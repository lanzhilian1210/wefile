<template>
    <div class="loginBox">
       <div class="chooseLogin">
           <!-- <div class="wxLogin">微信扫码登录</div>
           <span class="xian">|</span>
           <div class="otherLogin">其他方式登录</div> -->
       </div>
       <!-- 微信 -->
       <div class="loginContent" style="display:none;">
           <div class="loginCon"></div>
           <div class="wxTips">打开微信扫一扫</div>
       </div>
       <!-- 手机号 登录-->
        <div class="otherLoginContent" style="display:none;">
            <div class="otherLineOne">
                <span>账号登录</span>
                <span>快速注册</span>
                <span>没有账号?</span>
            </div>
            <div class="phoneBox">
                <input type="text" placeholder="请输入手机号">
            </div>
            <div class="passwordBox">
                <input type="text" placeholder="请输入密码">
            </div>
            <div class="loginBtn">登录</div>
        </div>
        <!-- 注册  -->
        <div class="registBox" style="display:none;">
           <div class="phoneBox">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <input type="text" placeholder="请输入手机号" class="registerPhone">
            </div>
            <div class="passwordBox">
                <input type="text" placeholder="请输入密码">
                
            </div>
            <span class="forgetPass">忘记密码</span>
            <div class="testCodeBox">
                <input type="text" class="testCode">
                <div class="codeBox"></div>
            </div> 
            <div class="loginBtn">立即登录</div>
        </div>
        <!--  忘记密码-->
        <div class="registBox" >
           <div class="phoneBox">
                <el-select v-model="value" placeholder="请选择">
                    <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                    </el-option>
                </el-select>
                <input type="text" placeholder="请输入手机号" class="registerPhone">
            </div>
            <div class="passwordBox">
                <input type="text" placeholder="请输入新密码">
                
            </div>
            <div class="testCodeBox">
                <input type="text" class="testCode">
                <div class="codeBox">发送验证码</div>
            </div> 
            <div class="loginBtn">立即登录</div>
        </div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                name:'abc',
                password: '123',
                phone: '',
                value:'', // 选中的值
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                    }, {
                    value: '选项2',
                    label: '双皮奶'
                    }, {
                    value: '选项3',
                    label: '蚵仔煎'
                    }, {
                    value: '选项4',
                    label: '龙须面'
                    }, {
                    value: '选项5',
                    label: '北京烤鸭'
                }],
            }
        },
    }
</script>
<style>
.loginBox{
    width: 400px;
    height: 500px;
    margin: 50px auto 0;
    border: 1px solid #222;
}
.chooseLogin{
    height: 80px;
    width: 100%;
    border-bottom: 1px solid #999;
}
.wxLogin,.otherLogin{
    width: 50%;
    height: 80px;
    font: 22px/80px "微软雅黑";
    /* color: #007AEF; */
    color: #000;
    text-align: center;
    float: left;
}
.loginBtn{
    height: 40px;
    width: 100%;
    background: #007aef;
    text-align: center;
    font: 18px/40px "微软雅黑";
    color: #fff;
    margin-top: 35px;
}
.otherLogin{
    width: 49%;
}
.xian{
    width: 0.5%;
    height: 80px;
    font: 22px/80px "微软雅黑";
    /* color: #007AEF; */
    color: #000;
    text-align: center;
    float: left;
}
.loginContent{
    position: relative;
    height: 310px;
}
.otherLoginContent,.registBox{
     position: relative;
     height: 310px;
     padding: 0 45px;
}
.otherLineOne{
    margin-top: 30px;
    height: 16px;
    font: 16px/16px "微软雅黑";
}
.otherLineOne span:nth-of-type(1){
float: left;
}
.otherLineOne span:nth-of-type(2){
float: right;
color: #007aef;
}
.otherLineOne span:nth-of-type(3){
float: right;
margin-right: 6px;
}
.phoneBox,.passwordBox{
    height: 38px;
    margin-top: 30px;
}
.phoneBox input,.passwordBox input{
    height: 36px;
    border: 1px solid #e4e4e4;
    width: 100%;
    outline: none;
}
.loginCon{
    height: 240px;
    width: 240px;
    background: #e4e4e4;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
}
.wxTips{
    height: 40px;
    width: 240px;
    background: #e4e4e4;
    border-radius: 20px;
    margin:auto;
    text-align: center;
    font: 18px/40px "微软雅黑";
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
}
.el-input__inner{
    height: 38px !important;
}
.el-select{
    position: absolute;
    width: 96px;
}
.registerPhone{
    width: 207px !important;
    position: absolute;
    left: 140px;
}
.forgetPass{
    font: 14px;
    color: #007aef;
    margin-top: 8px;
    float: right;
}
.testCodeBox{
    margin-top: 45px;
    height: 36px;
}
.testCode{
    height: 36px;
    outline: none;
    border: 1px solid #e4e4e4;
    width: 160px;
    float: left;
}
.codeBox{
    width: 90px;
    height: 36px;
    border: 1px solid #e4e4e4;
    float: right;
    font: 14px/36px "微软雅黑";
    color: #007aef;
    text-align: center;
}
</style>
