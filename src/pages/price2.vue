<template>
    <div>
        <div class="priceBoxTitle">
            <!-- <div>选择专业版套餐</div>
            <div>新购1次送10次</div> -->
        </div>
        <div class="priceBox">
            <div class="boxTop">
                <div class="priceName">套餐次数</div>
                <div class="priceMenu">
                    <div class="menuConf">
                        <div class="menuTop">1次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">新用户送10次</div>
                    </div>
                    <div class="menuConf">
                        <div class="menuTop">1次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">新用户送10次</div>
                    </div>
                    <div class="menuConf">
                        <div class="menuTop">1次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">新用户送10次</div>
                    </div>
                    <div class="menuConf">
                        <div class="menuTop">1次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">新用户送10次</div>
                    </div>
                    <div class="menuConf">
                        <div class="menuTop">1次</div>
                        <div class="menuLine"></div>
                        <div class="menuDis">新用户送10次</div>
                    </div>
                </div>
                </div>
                    <div class="priceName">支付方式</div>
                <div class="typePrice">
                    <div class="wxCoin">微信支付</div>
                    <div class="wxCoin">支付宝支付</div>
                </div>
                <div class="priceTable">
                    <div class="shouldPayBox">
                        <span>应付金额</span>
                        <span>￥10.00</span>
                    </div>
                    <div class="gotCountBox">
                        <span>转换次数</span>
                        <span>11次</span>
                    </div>
                </div>
                <div class="payRightNow">立即支付</div>
                
        </div>
    </div>
</template>
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
</style>