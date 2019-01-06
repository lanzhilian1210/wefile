<template>
<div class="pageWapper">
    <fileHeader></fileHeader>
    <fileInput></fileInput>
    <!-- 描述 -->
     <fileText v-show="isShow"></fileText> 
    <footerFile></footerFile> 
</div>
</template>
<script>
    import fileHeader from '../components/fileHeader';
    import fileInput from '../components/fileInput1';
    // import file from '../components/file';
    import fileText from '../components/fileText';
    import footerFile from '../components/footerFile';
    export default{
        components:{
            fileInput,fileText,footerFile,fileHeader
        },
        data() {
            return {
                isShow: true,
            }
        },
        methods:{
            getMsg(status){
                console.log(status);
                this.isShow = status;
            }
        }
    }
</script>
<style>
.pageWapper{
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
}

</style>
