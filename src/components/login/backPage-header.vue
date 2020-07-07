<template>
    <div class="card">
        <div class="card-body">
            <h5>登录</h5>
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">邮箱或手机号</label>
                    <input type="email" class="form-control" 
                    id="exampleInputEmail1" 
                    aria-describedby="emailHelp" 
                    placeholder="Enter email or number">
                    <small id="emailHelp" class="form-text text-muted">请输入您的邮箱或者手机号.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">密码</label>
                    <input type="password" class="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password">
                </div>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">记住我</label>
                </div>
                <button type="submit" class="btn btn-primary">登录</button>
            </form>
        </div>
    </div>
</template>


<script>
export default {
    

}
</script>
