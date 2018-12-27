<template>
    <div class="aboutBox">
        <!-- <fileHeader></fileHeader> -->
        <div class="aboutTitle">关于文件转换</div>
        <div class="txt1">我们相信并创造以云计算为中心的应用，在线文件转换是解决不同场景文件使用的快捷方式。</div>
        <div class="txt1">在线文件格式转换的网站并不稀少，但它们不是充满广告干扰就是不能保证满意的转换效果，或者功能有限。</div>
        <div class="txt1">WeFile.com致力于成为您喜爱的通用的文件处理平台。</div>
        <div class="aboutTitle">关于信天邮科技</div>
        <div class="txt1">北京信天邮科技有限公司成立于2017年8月，公司注册地为北京市朝阳区。</div>
        <div class="txt1">我们以更加开放、协作的方式解决文件协同存储、文件转换、大文件分发等需求。</div>
        <div class="txt1">创始团队成员来自企业SaaS服务、电子商务等行业，有10余年服务经验。</div>
        <div class="txt1">北京信天邮科技为阿里云市场合作伙伴，您的数据安全由阿里云提供保护。</div>
    </div>
</template>
<script>
import fileHeader from '../components/fileHeader';
export default {
    components:{
        fileHeader
    },
    data() {
        return {

        }
    }
}
</script>
<style>
    .aboutTitle{
        height: 32px;
        font: 32px/32px "微软雅黑";
        color: #000;
        margin-top: 30px;
    }
    .aboutBox{
        width: 1200px;
        margin: 0 auto;
        padding-top: 70px;
    }
    .txt1{
        font: 16px/20px "微软雅黑";
        color: #000;
        margin: 30px 0 0 30px;
    }
</style>