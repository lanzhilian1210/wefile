<template>
    <div class="loginBox">
       <div class="chooseLogin"></div>
    </div>
</template>
<script>
    export default{
        data() {
            return {
                name:'abc',
                password: '123',
                phone: '',
            }
        },
    }
</script>
<style>
.loginBox{
    width: 400px;
    height: 500px;
    margin: 50px auto 0;
    border: 1px solid #222;
}
.chooseLogin{
    height: 80px;
    
}
</style>
