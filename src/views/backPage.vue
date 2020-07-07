<style>
    .app{
        margin: 0;
    }

    .backBody{
        background: url('../assets/login-back-img/now-back.jpg') no-repeat;
        min-height: 600px;
    }
    .backBody .BodyHeader{
        position: relative;
        height: 350px;
        
    }
    .loginBox{
        position: fixed;
        top: 150px;
        left: 120px;
    }
</style>

<template>
<!-- 登录 模板 -->
    <div class="backBody">
        <!-- <BossHeader></BossHeader> -->
        <div class="row" >
            <div class="col-6">
                <div class="card" style="width:350px;top:120px;left:200px;" v-if="show">
                    <div class="card-body">
                        <h5>登录</h5>
                        <form>
                            <div class="form-group">
                                <label for="exampleInputphone1">邮箱或手机号</label>
                                <input type="text" class="form-control" 
                                id="exampleInputEmail1" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email or number"
                                v-model="username"
                                >
                                <small id="emailHelp" 
                                    class="form-text text-muted">请输入您的邮箱或者手机号.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">密码</label>
                                <input type="password" class="form-control" 
                                id="exampleInputPassword1" 
                                placeholder="Password"
                                v-model="pwd"
                                >
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                                <label class="form-check-label" for="exampleCheck1">记住我</label>
                            </div>
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="submit" class="btn btn-primary" @click="submit">登录</button>
                                <button type="submit" class="btn btn-link" @click="register">注册</button>
                            </div>
                           
                        </form>
                    </div>
                </div>
                <register v-if="!show" @register_hide="register_hide"></register>
            </div>
           <div class="col-6" >
               <div style="top: 140px;left: 200px;position: absolute;color:white">
                   <h1>生活中的乐趣无处不在</h1>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
//import BossHeader from '../components/msg/header.vue'

import bag from '../assets/login-back-img/now-back.jpg'

import {login} from '../store/template/login' //登录 js
import loginHeader from '../components/login/backPage-header' //头部组件
import md5 from 'js-md5'
import register from '../components/login/register'
export default {
    components:{loginHeader,register},
    data() {  //  
        return {
            username:'',
            pwd:'',
            show:true
        }
    },
    created(){ //初始化 加载 

    },
    methods: { //处理方法
        init(){

        },
        submit(){
            console.log(this.username);
            console.log(this.pwd);
            let  data =
             {
                 username :this.username ,
                 password :md5(`${this.username}${this.pwd}`)
            }
            
            this.$http.post(`user/login`,data).then(res=>{
                console.log(res);
            })
           // var msg =  login(this.username,this.pwd);
           
        },
        register(){
            this.show = false;
        },
        register_hide(bool){
            console.log(bool)
            this.show  = bool;

        }
    },
}
</script>