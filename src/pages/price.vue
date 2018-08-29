<template>
    <div class="priceContent">
        <fileHeader></fileHeader>
        <div class="priceText">
            <div class="priceCon">
                <img src="../../static/img/money.jpg" alt="" class="iconImg">
                <div class="priceTitle">免费使用</div>
                <div class="priceList">
                    <p><span>*</span>每小时最多转换两个文件</p>
                    <p><span>*</span>不支持多文件同时上传</p>
                    <p><span>*</span>低优先级转换通道</p>
                    <p><span>*</span>最大100M文件</p>
                </div>
            </div>
            <div class="priceCon heightCon1">
                <img src="../../static/img/count.jpg" alt="" class="iconImg" style="top:200px">
                <div class="priceTitle" style="top:210px">按次付费</div>
                <div class="priceList listHeight">
                    <p><span>*</span>不限制每小时转换次数</p>
                    <p><span>*</span>转换次数永不清空</p>
                    <p><span>*</span>支持多文件同时上传转换</p>
                    <p><span>*</span>高速转换通道</p>
                    <p><span>*</span>最大上传5G文件</p>
                    <div class="allTitle">
                        <span>合计转换</span>
                        <span>费用</span>
                    </div>
                    <div class="countDis">
                        <span style="color:#990000">100次</span>
                        <span>￥1.00</span>
                    </div>
                    <div class="countNum">
                        <span>次数:</span>
                        <el-slider v-model="value"></el-slider>
                    </div>
                    <div class="buyBtn">按次购买</div>
                </div>
            </div>
            <div class="priceCon heightCon2">
                <img src="../../static/img/yue.jpg" alt="" class="iconImg" style="top:200px">
                <div class="priceTitle" style="top:210px">按月付费</div>
                <div class="priceList listHeight" style="height:500px;">
                    <p><span>*</span>不限制每小时转换次数</p>
                    <p><span>*</span>3倍于按月购买的转换次数</p>
                    <p><span>*</span>每30天清空转换次数</p>
                    <p><span>*</span>支持多文件同时上传转换</p>
                    <p><span>*</span>高速转换通道</p>
                    <p><span>*</span>最大上传5G文件</p>
                    <div class="allTitle">
                        <span>合计转换</span>
                        <span>费用</span>
                    </div>
                    <div class="countDis">
                        <span style="color:#990000">100次</span>
                        <span>￥1.00</span>
                    </div>
                    <div class="countNum">
                        <span>次数:</span>
                        <el-slider v-model="value"></el-slider>
                    </div>
                    <div class="buyBtn">包月购买</div>
                </div>
            </div>
        </div>
        <div class="footerCon">
            <footerFile></footerFile>
        </div>    
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
}
.footerCon{
     margin: 0 auto 30px;
    max-width: 1200px;
}
.priceCon{
    width: 100%;
    height: 290px;
    position: relative;  
}
.heightCon1{
    height: 600px;
}
.heightCon2{
    height: 620px;
}
.iconImg{
    height: 64px;
    width: 64px;
    position: absolute;
    top: 100px;
    left: 10%;
}
.priceTitle{
    height: 40px;
    font: 28px/40px "微软雅黑";
    color: #333;
    font-weight: 600;
}
.priceList{
    position: absolute;
    right: 0;
    width: 400px;
    top: 70px;
    height: 170px;
    padding-bottom: 40px;
    border-bottom: 1px solid #e0e0e0;
}
.listHeight{
    height: 460px;
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
.allTitle,.countDis,.countNum{
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
    height: 25px;
}
.allTitle span{
    height: 25px;
    font: 18px/25px "微软雅黑";
    color: #333;
    font-weight: 600;
}
.countDis{
    margin-top: 20px;
}
.countDis span{
    height: 25px;
    font: 18px/25px "微软雅黑";
    color: #333;
    font-weight: 900;
}
.countNum span{
       height: 25px;
    font: 18px/25px "微软雅黑";
    color: #333;
}
.el-slider{
    width: 300px;
}
.buyBtn{
    width: 140px;
    height: 52px;
    background: #0275D8;
    color: #fff;
    font: 20px/52px "微软雅黑";
    text-align: center;
    margin: 40px auto 0;
    border-radius: 10px;
}
</style>
