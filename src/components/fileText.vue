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
            img:require('../../static/img/1.jpg'),
            title:'云端转换真方便',
            text:'无需在您的设备上安装软件，只需直接上传文件并选择需要的转换类型即可完成文件转换操作，其它由我们云端程序完成。'
        },
        {
            img:require('../../static/img/2.jpg'),
            title:'值得信赖的转换技术',
            text:'想要完美进行的pdf文档转换并不容易，我们只使用市面上公认的优异转换技术确保满意的转换输出。'
        },
        {
            img:require('../../static/img/3.jpg'),
            title:'弹性价格',
            text:'为偶尔使用的匿名用户提供了每小时两次免费的服务。如果需要更多的转换，也可按照需要使用我们的付费服务。'
        },
        {
            img:require('../../static/img/4.jpg'),
            title:'将pdf转换为Word',
            text:'pdf文件并不可直接修改内容，使用在线转换器将其转换为docx格式可再次编辑。'
        },
        {
            img:require('../../static/img/5.jpg'),
            title:'将pdf转换为ppt',
            text:'想要编辑或使用ppt演示文件，直接将pdf文件上传至在线转换器并选择pptx格式输出即可。'
        },
        {
            img:require('../../static/img/6.jpg'),
            title:'提取pdf中的电子表格',
            text:'使用在线转换技术，可以识别pdf中的表格。并将每一表格存储为Excel工作表。'
        },
        {
            img:require('../../static/img/7.jpg'),
            title:'将pdf转换为图片',
            text:'可以将每页pdf转换为图片，也可将pdf文件中的图片单独提取。'
        },
        {
            img:require('../../static/img/8.jpg'),
            title:'自定义转换选项',
            text:'除了直接在线转换文件格式，您也可以增加转换选项，从而控制最终转换文件。'
        },
        {
            img:require('../../static/img/9.jpg'),
            title:'不断增加的转换类型',
            text:'更多的文档格式转换在持续增加中，请收藏我们的网站并关注动态。'
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
		margin:100px 55px 0;
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
}
</style>
