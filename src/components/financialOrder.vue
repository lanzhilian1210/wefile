<template>
    <div>
        <h2 class="financialTitle">财务订单</h2>
        <div class="financialTableTtitle">
            <div>时间</div><div>订单号</div><div>类型</div><div>数量</div><div>金额</div><div>支付方式</div><div>说明</div><div>状态</div><div>操作</div>
        </div>
        <ul class="financialTable">
            <li>
                <span >2018-12-20 13:01:00</span>
                <span>201812201301004</span>
                <span>新购</span>
                <span>1次</span>
                <span>¥1.00</span>
                <span>微信支付</span>
                <span>买1次送10次</span>
                <span>已完成</span>
                <span>申请退款</span>
            </li>
        </ul>
    </div>
</template>
<style>
    .financialTitle{
        margin-top: 30px;
        font-size: 24px;
        margin-left: 40px;
        font-weight: bold;
    }
    .financialTableTtitle{
        margin-left: 40px;
        margin-top: 30px;
        border-bottom: 1px solid #e4e4e4;
        height: 32px;
    }
    .financialTableTtitle div{
        height: 30px;
        font: 16px/30px "微软雅黑";
        text-align: center;
        width: 11.1%;
        float: left;
    }
    .financialTable{
        margin-left: 40px;
    }
    .financialTable li{
        height: 54px;
        font: 16px/18px "微软雅黑";
        text-align: center;
    }
    .financialTable li span{
        display: block;
        height: 54px;
        font: 16px/54px "微软雅黑";
        text-align: center;
        width: 11.1%;
        float: left;
    }
    .financialTable li span:nth-of-type(1){
        font: 16px/22px "微软雅黑";
    }
    .financialTable li span:nth-of-type(2){
        font: 16px/22px "微软雅黑";
        word-wrap:break-word;
    }
</style>