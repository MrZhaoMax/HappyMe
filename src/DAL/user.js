/**
 * 2020/02/04
 * 赵兴兴
 */
import http from "../api/api";
import md5 from "js-md5";


//新增用户
function adduser(username,pwd,email,phone){
    if(username==''){
        return '用户名不能为空！';
    }
    if(pwd == ''){
        return '密码不能为空！';
    }
    if(phone == '')
        return '手机号不能为空！'
    let charList = [];
    for (const iterator of pwd) {
        charList.push(iterator);
    }
    if(charList.length<6){
        return '注册密码不能小于六位！';
    };
    
    // if(/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email)){
    //     return '您的邮箱格式有误！';
    // }


    pwd = md5(`${username}${pwd}`)
    let postData={
        "username":username,
        "password":pwd,
        "email":email,
        "mobile":phone
    }
    http.post('user',postData).then(res=>{
        return res;
    }).catch(err=>{
        return err;
    })
}

//更改密码   需要重置密码 发送邮件

//login
function login(username,pwd){
    if(username==''){
        return '用户名不许为空！'
    }
    if(pwd == ''){
        return '密码不许为空！'
    }
    let data = {
        "username":username,"password":md5(`${username}${pwd}`)
    }
    http.post('user/login',data).then(res=>{
    
        return res;
    }).catch(err=>{
        return err;
    });
}





//logout
function logout(tokenID){
    if(getCookie('token') != null ||getCookie('token') != ''){
        //http.interceptors.response.
        //             config.headers['authorization']=getCookie('token');
    }
}



export default{
    adduser,login
}