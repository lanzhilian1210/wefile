<template>
<div class="pageWapper">
    <!-- <fileHeader></fileHeader> -->
    <fileInput></fileInput>
    <!-- <fileText></fileText>
    <footerFile></footerFile> -->
</div>
</template>
<script>
    import fileHeader from '../components/fileHeader';
    import fileInput from '../components/fileInput';
    import fileText from '../components/fileText';
    import footerFile from '../components/footerFile';
    export default{
        components:{
            fileInput,fileText,footerFile,fileHeader
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
