<template>
    <div>
        <div class="priceBoxTitle">
            <div>选择专业版套餐</div>
            <div>新购1次送10次</div>
        </div>
        <div class="priceBox">
            <div class="boxTop">
                <div>套餐次数</div>
                <div class="priceMenu">
                    <div class="menuConf">
                        <div class="menuTop">1次</div>
                        <div class="menuLine"></div>
                    </div>
                </div>
            </div>
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
    .boxTop div:nth-of-type(1){
        font-size: 24px;
        color: #222;
        display: inline-block;
        float: left;
    }
    .priceMenu{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        float: left;
        margin-left: 20px;
    }
    .menuConf{
        height:78px;
        width: 138px;
        border: 1px solid #999;
        margin-right: 10px;
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
        height: 1px;
        width: 100%;
        border: 1px dashed blue;
    }
</style>