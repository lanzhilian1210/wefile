<template>
    <div class="header-wrapper">
        <div class="logo"></div>
        <div class="logoText">文档转换真简单</div>
        <div class="banner">
            <div class="ban1" @click="handlePrice">定价1</div>
            <div class="shu"></div>
            <div class="ban2" @click="handleLogin">登录1</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        handleLogin() {
            this.$router.push({ path:'/login'})
        },
        handlePrice() {
            this.$router.push({ path:'/price'})
        }
    }
}
</script>
<style>

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
    width:168px;
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
    cursor: pointer;
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
    cursor: pointer;
}
</style>
