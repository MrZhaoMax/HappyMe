<style>
    .all-login-img{
        min-width: 1200px;
        min-height:600px ;
        background: url('../../assets/login-back-img/now-back.jpg');
        background-size:100% 100%; 
    }
    .login-warp{
        margin-top: 60px;
        position:relative;
    }
    .left-login-desc{
        float: left;
        color: beige;
    }
    .left-login-desc h2{
        font-weight: 800;
    }
    .right-login-box{
        float: right;
        padding-top: 360px;
        padding-right: 160px;
    }
</style>

<template>
    <div class="all-login-img" :style="'background-image:('+img+')'">
        <!-- Pexels 上的 stein egil liland 拍摄的照片 -->
        <div class="login-warp">
            <div class="left-login-desc">
                <h2>生活何必想象那么麻烦,快乐从来没有那么难！</h2>

            </div>
            <div class="right-login-box">
               
                    <div>
                        <span>
                            <input type="text" >
                        </span>
                    </div>
                    <div>
                        <span>
                            <input type="text">
                        </span>
                    </div>
                    <div>
                        <span>
                            <input type="text">
                        </span>
                    </div>
                    <div>
                        <button>登录</button>
                    </div>
               
            </div>
        </div>
    </div>
</template>

<script>
import img from '../../assets/login-back-img/now-back.jpg'
export default {
    data() {
        return {
            img:img
        }
    },   
}
</script>