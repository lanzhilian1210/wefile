<template>
    <div class="priceContent">
        <!-- <fileHeader></fileHeader> -->
        <div class="priceText">
            使用专业版获得更完美体验
        </div>
        <div class="buyType">
            <div class="type_l">
<div class="line_l"></div>
<div class="typeTitle">免费版</div>
<div class="type_dis"><span>每日转换限额</span><span>2个</span></div>
<div class="type_dis"><span>最大单个文件</span><span>10M</span></div>
<div class="type_dis"><span>任意类型转换</span><span style="    display: inline-block;
    width: 35px;">√</span></div>
    <div class="loginBtn" @click="handleLogin">登录/注册</div>
            </div>
            <div class="type_R">
<div class="line_r"></div>
<div class="typeTitle">专业版</div>
<div class="type_dis"><span>每日转换限额</span><span>无限制</span></div>
<div class="type_dis"><span>最大单个文件</span><span>无限制</span></div>
<div class="type_dis"><span>任意类型转换</span><span style="    display: inline-block;
    width: 35px;">√</span></div>
    <div class="type_dis"><span>多文件同时上传</span><span style="    display: inline-block;
    width: 35px;">√</span></div>
    <div class="type_dis"><span>高速转换通道</span><span style="    display: inline-block;
    width: 35px;">√</span></div>
    <div class="type_dis"><span>首次购买1次送10次</span><span style="    display: inline-block;
    width: 35px;">√</span></div>
    <div class="type_dis"><span>剩余次数永久有效</span><span style="    display: inline-block;
    width: 35px;">√</span></div>
    <div class="buyFile" style="" @click="handleBuy">立即购买</div>
            </div>
        </div>
       <!-- <footerFile></footerFile>  -->
    </div>
</template>
<script>
    import fileHeader from '../components/fileHeader';
    import footerFile from '../components/footerFile';
    export default{
        components:{
            fileHeader,footerFile
        },
        data() {
            return {
                value:12
            }
        },
        methods:{
            handleLogin() {
                this.$router.push({ path:'/login'})
            },
            handleBuy() {
                this.$router.push({ path:'/priceChoice'})
            }
        }

    }
</script>
<style scoped="scoped">
.priceText{
    margin: 90px auto 0;
    font-size: 32px;
    text-align: center;
    color: #000;
}
.buyType{
    height:592px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}
.type_l{
      width: 320px;
    height: 100%;
 border: 1px solid #D7D7D7;
 position: relative;
}
.type_R{
      width: 320px;
    height: 100%;
    border: 1px solid #007AEF;
    margin-left: 50px;
     position: relative;
}
.line_l{
    width: 100%;
    height: 10px;
    background: #D7D7D7;
}
.line_r{
    width: 100%;
    height: 10px;
    background: #007AEF;
}
.typeTitle{
   font-size: 30px;
   text-align: center;
   margin: 30px auto; 
}
.type_dis{
    display: flex;
    justify-content:space-around;
    align-items: center;
    font-size: 18px;
    margin-bottom: 30px;
}
.type_dis span:nth-of-type(1){
   display: inline-block;
   width: 163px;
}
.type_dis span:nth-of-type(2){
    font-weight: bold;
}
.loginBtn{
    width: 140px;
    height: 40px;
    border: 1px solid #008AEF;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    margin: auto;
    text-align: center;
    font: 14px/40px "微软雅黑";
    color: #008AEF;
    cursor: pointer;
}
.buyFile{
border: 1px solid #008AEF;
height:40px;
width: 140px;
cursor: pointer;
color: #008AEF;
text-align: center;
font: 14px/40px "微软雅黑";
    position: absolute;
    left: 0;
    right: 0;
    bottom: 40px;
    margin: auto;
}
</style>
