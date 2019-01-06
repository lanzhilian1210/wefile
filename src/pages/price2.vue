<template>
    <div>
        <div class="priceBoxTitle">
            <div>选择VIP版套餐</div>
            <div>新购1次送10次</div>
        </div>
        <div class="priceBox">
            <div class="boxTop">
                <div class="priceName">转换套餐</div>
                <div class="priceMenu">
                    <div class="menuConf" :class="{activeClass: activeIndex == 0}" @click="tabMenu(0)">
                        <div class="menuTop">1次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">新用户送10次</div>
                    </div>
                    <div class="menuConf" :class="{activeClass: activeIndex == 1}" @click="tabMenu(1)">
                        <div class="menuTop">10次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">送10次</div>
                    </div>
                    <div class="menuConf" :class="{activeClass: activeIndex == 2}" @click="tabMenu(2)">
                        <div class="menuTop">20次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">送15次</div>
                    </div>
                    <div class="menuConf" :class="{activeClass: activeIndex == 3}" @click="tabMenu(3)">
                        <div class="menuTop">50次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">送18次</div>
                    </div>
                    <div class="menuConf" :class="{activeClass: activeIndex == 4}" @click="tabMenu(4)">
                        <div class="menuTop">100次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">送20次</div>
                    </div>
                    <div class="menuConf" :class="{activeClass: activeIndex == 5}" @click="tabMenu(5)">
                        <div class="menuTop">200次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">送50次</div>
                    </div>
                    <div class="menuConf" :class="{activeClass: activeIndex == 6}" @click="tabMenu(6)">
                        <div class="menuTop">500次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">送200次</div>
                    </div>
                    <div class="menuConf" :class="{activeClass: activeIndex == 7}" @click="tabMenu(7)">
                        <div class="menuTop">1000次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">送500次</div>
                    </div>
                </div>
                </div>
                    <div class="priceName">支付方式</div>
                <div class="typePrice">
                    <div class="wxCoin" :class="{cionClass: cionIndex == 0}" @click="tabCion(0)">微信支付</div>
                    <div class="wxCoin" :class="{cionClass: cionIndex == 1}" @click="tabCion(1)">支付宝支付</div>
                </div>
                <div class="priceTable">
                    <div class="shouldPayBox">
                        <span>应付金额</span>
                        <span>￥{{moneyLis}}</span>
                    </div>
                    <div class="gotCountBox">
                        <span>转换次数</span>
                        <span>{{transforLis}}次</span>
                    </div>
                </div>
                <div class="payRightNow" @click="handlePayNow">立即支付</div>
                
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            activeIndex:-1,
            cionIndex:-1,
            pay_fee:0,
            moneyList:[1.00,10.00,20.00,50.00,100.00,200.00,500.00,1000.00],
            transforList:[11,20,35,68,120,250,700,1500],
            moneyLis:0, //支付金额
            transforLis:0, //转换次数
        }
    },
    methods:{
        tabMenu(index) {
            this.activeIndex = index;
            this.transforLis = this.transforList[index];
            this.moneyLis = this.moneyList[index];
        },
        tabCion(index) {
            this.cionIndex = index;
        },
        handlePayNow() {
            let data = {
                "pay_fee": this.moneyLis
            }
            if(this.cionIndex == -1){
                alert('请选择支付方式')
            }
            // 支付宝支付
            if(this.cionIndex == 1) {
                this.axios.post('/alipay/pay', data).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            }
            // 微信支付
            if(this.cionIndex == 0) {
                this.axios.post('/wechat/pay', data).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            }
            
        }

    }
}
</script>
<style lang="">
    .priceBox{
        width: 760px;
        height: 540px;
        background: #FAFAFA;
        margin: 50px auto 0;
        padding: 20px 60px;
    }
    .priceBoxTitle{
        margin: 30px auto;
    }
    .priceBoxTitle div{
        text-align: center;
    }
    .priceBoxTitle div:nth-of-type(1){
        font: 32px/32px "微软雅黑";
        color: #000;
        text-align: center;
        font-weight: bold;
    }
        .priceBoxTitle div:nth-of-type(2){
        font: 18px/18px "微软雅黑";
        color: #000;
        text-align: center;
        margin-top: 5px;
    }
    .boxTop{
        box-sizing: content-box;
    }
    .priceName{
        font-size: 24px;
        color: #222;
        display: inline-block;
        float: left;
        line-height: 40px;
    }
    .priceMenu{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        float: left;
        margin-left: 20px;
        width: 640px;
        flex-wrap: wrap;
    }
    .menuConf{
        height:78px;
        width: 138px;
        border: 1px solid #999;
        margin-right: 20px;
        margin-bottom: 20px;
        cursor: pointer;
    }
    .menuTop{
        height: 36px;
        width: 100%;
        text-align: center;
        font: 24px/36px "微软雅黑";
        color: #000;
        font-weight: bold;
    }
    .menuLine{
        width: 98%;
        border: 1px dashed blue;
    }
    .menuDis{
        height: 34px;
        font: 16px/34px "微软雅黑";
        color: #666;
        text-align: center;
    }
    .typePrice{
        height: 40px;
        float: left;
        margin-left: 20px;
    }
    .wxCoin{
        float: left;
        height: 40px;
        width: 145px;
        text-align: center;
        font: 14px/40px "微软雅黑";
        margin-right: 20px;
        cursor: pointer;
        background: #e4e4e4;
    }
    .priceTable{
        width: 620px;
        height: 120px;
        background: #e4e4e4;
        float: right;
        margin-right: 24px;
        margin-top: 20px;
    }
    .shouldPayBox,.gotCountBox{
      height: 60px;
      width: 100%;
      font: 22px/60px "微软雅黑";
    }
    .shouldPayBox span:nth-of-type(1){
        float: left;
        margin-left: 20px;
    }
    .shouldPayBox span:nth-of-type(2){
        float: right;
        margin-right: 20px;
        color: #FF3B30;
    }
    .gotCountBox span:nth-of-type(1){
        float: left;
        margin-left: 20px;
    }
    .gotCountBox span:nth-of-type(2){
        float: right;
        margin-right: 20px;
        color: #FF3B30;
    }
    .payRightNow{
        width: 620px;
        height: 60px;
        background: #007AEF;
        float: right;
        margin-right: 24px;
        margin-top: 20px;
         font: 18px/60px "微软雅黑";
         color: #fff;
         text-align: center;
    }
    .activeClass{
        border: 1px solid #007AEF;
    }
    .cionClass{
        background: #007AEF;
        color: #fff;
    }
</style>