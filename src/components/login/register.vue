<template>
     <div class="card" style="width:500px;top:120px;left:50px;" >
            <div class="card-body">
                        <h5>注册</h5>
                        <form>
                            <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-4 col-form-label">Username</label>
                                    <div class="col-sm-6">
                                    <input type="text" v-model="fromdata.username" class="form-control" id="inputUsername" placeholder="Name">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="staticEmail" class="col-sm-4 col-form-label">Email</label>
                                    <div class="col-sm-7">
                                    <input type="text"  v-model="fromdata.email" class="form-control-plaintext" id="staticEmail" value="email@example.com">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-4 col-form-label">Password</label>
                                    <div class="col-sm-6">
                                    <input type="password" v-model="fromdata.pwd" class="form-control" id="inputPassword" placeholder="Password">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label for="inputPassword" class="col-sm-4 col-form-label">Number</label>
                                    <div class="col-sm-6">
                                    <input type="text" v-model="fromdata.phone" class="form-control" id="inputPhone" placeholder="Text">
                                    </div>
                                </div>
                                <div class="form-group row" style="padding-left: 42px;padding-top: 50px;">
                                    <button type="button"  class="btn btn-primary col-sm-5" @click="register">注册</button>
                                    <button type="submit" class="btn btn-link col-sm-4" @click="login">登录</button>
                                </div>
                            </form>  
            </div>
      </div>
</template>

<script>
import user from '../../DAL/user'
export default {
    data() {
        return {
            fromdata:{
                username:'',
                email:'',
                pwd:'',
                phone:''
            }
        }
    },
    methods:{
        register(){
           var data =   user.adduser(this.fromdata.username,this.fromdata.pwd,this.fromdata.email,this.fromdata.phone);
           console.log(data);
        },
        login(){
            this.$emit('register_hide',true);
        }
    }
}
</script>