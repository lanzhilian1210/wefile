<template>
    <div>
        姓名：<input type="text" v-model="name"> <br />
        密码：<input type="text" v-model="password"><br />
        手机号：<input type="text" v-model="phone"><br />
        <button @click="reg">注册</button>
        <button @click="login">登录</button>
        <button @click="status">状态</button>
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
        methods:{
            login() {
                let data = {
                    userName:this.name,
                    password:this.password
                };
                this.axios.post('http://localhost:3000/users/login',data).then(res=>{
                    console.log(res);
                    localStorage.setItem('token',res.data.token)
                }).catch(err=>{
                    console.log(err);
                })
            },
            reg() {
                let data = {
                    userName:this.name,
                    password:this.password
                };
                this.axios.post('http://localhost:3001/users/reg',data).then(res=>{
                    console.log(res);
                }).catch(err=>{
                    console.log(err);
                })
            },
            status() {
                let data = '123';
                let token = 'Bearer '+ localStorage.getItem("token");

                this.axios.post('http://localhost:3000/users/status',data,{headers:{'Authorization':token}}).then(res=>{
                    console.log(res);
                }).catch(err=>{
                    console.log(err);
                })
            }
        }
    }
</script>
<style>
div{
    padding: 100px;
}
div input{
    margin: 20px;
}
</style>
