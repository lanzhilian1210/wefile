<template>
<div>
    <!-- 未购买专业版 -->
    <div class="user_content_dis">             
        您当前使用的是WeFile免费版，使用VIP版获得更多权益
    </div>
    <div class="updateV" @click="buyNow">立即购买</div>
</div>

</template>
<script>
export default {
    data() {
        return {

        }
    },
    methods:{
        buyNow() {
            this.$router.push({path:'/priceChoice'})
        }
    }
}
</script>
<style lang="">
.user_content_dis{
    width: 458px;
    font: 32px/42px "微软雅黑";
    color: #000;
    margin: 135px auto;
}
.updateV{
    height: 40px;
    width: 140px;
    cursor: pointer;
    background: #007aef;
    text-align: center;
    font: 18px/40px "微软雅黑";
    color: #fff;
    margin: 0 auto;
}
</style>