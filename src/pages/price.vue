<template>
    <div class="priceContent">
        <fileHeader></fileHeader>
        <div class="priceText">
            <div class="priceBox">
                <img src="../../static/img/money.jpg" alt="">
                <span>免费版</span>
                <div class="priceList">
                    <p>每小时最多转换两个文件</p>
                    <p>不支持多文件同时上传</p>
                    <p>低优先级转换通道</p>
                    <p>最大100M文件</p>
                </div>
            </div>
            <div class="priceBox priceBox2">
                <img src="../../static/img/count.jpg" alt="">
                <span>专业版</span>
                <div class="priceList">
                    <p>不限制每小时转换次数</p>
                    <p>转换次数永不清空</p>
                    <p>支持多文件同时上传转换</p>
                    <p>高速转换通道</p>
                    <p>最大上传5G文件</p>
                </div>
            </div>
            <div class="priceTab">
                <span>按次使用</span>
                <span>包月使用</span>
            </div>
            <div class="priceBox priceBox3">
                <img src="../../static/img/count.jpg" alt="">
                <div class="priceList">
                    <p>大部分用户的选择</p>
                    <p>根据转换频率，按需购买</p>
                    <p>剩余次数,永不清空</p>
                    <p>可再次续费</p>
                    <div class="priceDis">
                        <span>合计转换</span>
                        <span>费用</span>
                    </div>
                    <div class="priceDis priceDis2">
                        <span>100次</span>
                        <span>￥10.00</span>
                    </div>
                    <div class="priceCount">
                        <span class="priceCountName">次数</span>
                        <div class="priceNum">
                            <span>100次</span>
                            <span>100次</span>
                            <span>100次</span>
                            <span>100次</span>
                            <span>100次</span>
                        </div>
                    </div>
                    <div class="buyCount"><span>立即购买</span></div>
                </div>
            </div>
        </div>
        <!-- <div class="footerCon">
            <footerFile></footerFile>
        </div>     -->
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
        }
    }
</script>
<style scoped="scoped">
.priceText{
    padding-top: 30px;
    margin: 0 auto;
    max-width: 1200px;
    padding-bottom: 30px;
}
.priceBox{
    width: 100%;
    height: 260px;
    border-bottom: 1px solid #E0E0E0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.priceBox img{
    height: 43px;
    max-width: 43px;
}
.priceBox>span{
    font-size: 28px;
    color: #333;
    font-weight: 600;
}
.priceList p{
    height: 40px;
    font: 18px/40px "微软雅黑";
    color: #333;
}
.priceList p span{
    display: inline-block;
    margin-right: 20px;
}
.priceBox2{
    border: none;
}
.priceTab{
    height: 40px;
    display: flex;
    justify-content: center;
}
.priceTab span{
    width: 120px;
    height: 40px;
    background: #E4E4E4;
    font: 18px/40px "微软雅黑";
    color: #222;
    text-align: center;
}
.priceBox3{
    border: none;
    height: auto;
    margin-top: 20px;
}
.priceBox3 .priceList{
    max-width: 590px;
    min-width: 590px;
    margin-left: 48px;
}
.priceDis{
    height: 20px;
    font-size: 20px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}
.priceDis2 span{
    color: #F7BA2A;
}
.priceCount{
    height: 30px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-start;
}
.priceCountName{
    height: 30px;
    font: 16px/30px "微软雅黑";
    font-weight: 600;
}
.priceNum{
    margin-left: 20px;
    height: 30px;
    font: 14px/30px "微软雅黑";
}
.priceNum span{
    width: 90px;
    text-align: center;
    display: inline-block;
    margin-left: 4px;
    background: #E4E4E4;
}
.buyCount{
    width: 100%;
    margin-top: 30px;
    height: 40px;
    text-align: center;
}
.buyCount span{
    width: 160px;
    background: #3A8EE6;
    height: 100%;
    font: 16px/40px "微软雅黑";
    color: #fff;
    text-align: center;
    display: inline-block;
}
</style>
