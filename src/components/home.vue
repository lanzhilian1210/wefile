<template>
<div class="pageWapper">
    <div class="header-wrapper">
        <div class="logo"></div>
        <div class="logoText">文档转换真简单</div>
        <div class="banner">
            <div class="ban1">定价</div>
            <div class="shu"></div>
            <div class="ban2">登录</div>
            <div class="register">注册</div>
        </div>
    </div>
</div>
</template>
<style>
.pageWapper{
    height: 100%;
    width: 100%;
    
}

.logo{
    width: 160px;
    height: 40px;
    background:dodgerblue;
    display: inline-block;
    margin-left:30px;
}
.logoText{
    height: 16px;
    font:16px/16px "微软雅黑";
    color: #333;
    position: absolute;
    left: 23.3333%;
    top: 70px;
}
.banner{
    width:284px;
    height:52px;
    float:right;
    display:flex;
    justify-content: flex-start;
    margin-right:30px;
}
.ban1{
    height:100%;
    font:20px/52px "微软雅黑";
    color:#333;
}
.shu{
    height:48px;
    width:1px;
    background:#E0E0E0;
    margin-left:36px;
}
.ban2{
    height:100%;
    font:20px/52px "微软雅黑";
    color:#333;
    margin-left:36px;
}
.register{
    height:100%;
    font:20px/52px "微软雅黑";
    color:#fff;
    margin-left:36px;
    background:#0275D8;
    width:84px;
    text-align:center;
    border-radius:10px;
}
</style>
