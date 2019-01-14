<template>
    <div class="userBox">
        <div class="userLeft">
            <div class="leftTop">
                <div class="leftRadius">FREE</div>
                <div class="restore" >升级为VIP版</div>
                <!-- <div class="restore">剩余10次</div> -->
            </div>
            <div class="userItems">
                <div @click="handleTab(0)" :class="{'tabActive': isDisplayComponent === 0}">主页</div>
                <div @click="handleTab(1)" :class="{'tabActive': isDisplayComponent === 1}">账户</div>
                <div @click="handleTab(2)" :class="{'tabActive': isDisplayComponent === 2}">订单</div>
            </div>
        </div>
        <div class="userRight">
            <user-free-main v-show="isDisplayComponent === 0"></user-free-main>
            <!-- <userVipMain></userVipMain> -->
            <account v-show="isDisplayComponent === 1"></account>
            <financialOrder v-show="isDisplayComponent === 2"></financialOrder>
        </div>
    </div>
</template>
<script>
import userFreeMain from '../components/userFreeMain' // 免费账户主页
import account from '../components/account' //账户
import financialOrder from '../components/financialOrder' // 财务订单
import userVipMain from '../components/userVipMain' //vip主页
export default {
    components:{
        userFreeMain,account,financialOrder,userVipMain
    },
    data() {
        return {
            isDisplayComponent:0,
        }
    },
    methods:{
        handleTab(index){
            this.isDisplayComponent = index;
        }
    }
}
</script>
<style lang="">
.userBox{
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
}
    .userLeft{
        width: 270px;
        margin-top: 30px;
        float: left;
        height: 700px;
        border-right: 1px solid #e4e4e4;
    }
    .leftTop{
        width: 230px;
        height: 130px;
        border-bottom: 1px solid #e4e4e4;
        padding-top: 30px;
    }
    .leftRadius{
        width: 52px;
        height: 52px;
        border-radius: 50%;
        margin: 20px auto;
        border: 5px solid #999;
        font: 20px/52px "微软雅黑";
        text-align: center;
    }
    .userRight{
        width: 880px;
        margin-top: 30px;
        float: right;
    }
    .restore{
        height: 16px;
        font: 14px/16px "微软雅黑";
        color: #999;
        text-align: center;
    }
    .userItems{
        width: 100%;
        padding-top: 30px;
    }
    .userItems div{
        height: 22px;
        font: 18px/22px "微软雅黑";
        color: #000;
        margin-bottom: 30px;
        text-align: center;
        cursor: pointer;
    }
    .tabActive{
        font-weight: bold !important;
    }
</style>