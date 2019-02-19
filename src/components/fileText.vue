<template>
    <div class="fileText">
        <div class="textCon" v-for="(lis,index) in imgList" :key="index">
            <div class="iconText" :style="{ 'backgroundImage': 'url(' + lis.img + ')','background-repeat':'no-repeat' }"></div>
            <div class="textTitle">{{lis.title}}</div>
            <div class="textDis">{{lis.text}}</div>
        </div>
    </div>
</template>
<script>
    let img = [ 
        {
            img:require('../../static/img/1.svg'),
            title:'云端转换真方便',
            text:'无需在您的设备上安装软件，直接上传文件并选择需要的格式即可完成文件转换操作，其它由我们来完成。'
        },
        {
            img:require('../../static/img/2.svg'),
            title:'值得信赖的转换技术',
            text:'想要完美进行PDF文档转换并不容易，我们只使用市面上公认的优异技术确保满意的转换效果。'
        },
        {
            img:require('../../static/img/3.svg'),
            title:'按需使用',
            text:'免费用户每天可以转换两次。如果需要更多的次数，可根据需要选择会员套餐服务。'
        },
        {
            img:require('../../static/img/docx.svg'),
            title:'PDF转Word',
            text:'pdf文件一般并不可直接修改内容，使用在线转换器将其转换为docx格式，然后再次编辑。'
        },
        {
            img:require('../../static/img/pptx.svg'),
            title:'PDF转PPT',
            text:'想要使用ppt或编辑演示文件，直接将pdf文件上传至在线转换器并选择ppt输出即可。'
        },
        {
            img:require('../../static/img/xlsx.svg'),
            title:'PDF转Excel',
            text:'使用在线转换技术，可以识别pdf中的表格。并将每一表格存储为Excel工作表。'
        },
        {
            img:require('../../static/img/pdf.svg'),
            title:'Office转PDF',
            text:'将Word转为PDF、Excel转为PDF、PPT转为PDF、HTML转为PDF，以便于演示及不同设备查看。'
        },
        {
            img:require('../../static/img/4.svg'),
            title:'文件安全',
            text:'所有文件将会在完成转换的24小时内删除，并不会在系统中额外保留。系统使用阿里云服务。'
        },
        {
            img:require('../../static/img/5.svg'),
            title:'不断增加的转换',
            text:'更多的类型文件转换在持续增加中，请收藏我们的网站并关注动态。'
        }
        ];
    export default{
        data() {
            return {
                imgList:img,
            }
        },
    }
</script>
<style>
.fileText{
		margin:60px 55px 0;
		display:flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap:wrap;
        border-bottom: 1px solid #E0E0E0;
        margin-bottom: 40px; 
	}
.iconText{
    width:100%;
    height:64px;
    background-position: center;
}
.textTitle{
    width:100%;
    height: 40px;
    font: 28px/40px "微软雅黑";
    color: #333;
    font-weight: 600;
    text-align: center;
}
.textDis{
    width:100%;
    font: 18px/24px "微软雅黑";
    color: #333;
    margin-top: 30px;
    text-align: center;
}
</style>
