import api from 'axios'
import {SHA1} from '../assets/js/SHA1'
import Axios from 'axios';
import { getCookie } from '../DAL/cookie';

const appid = "A6035260803924";
const appkeys = "16024DD3-51E9-B6FA-B576-61213E768799";


var now = Date.now();
var appkey =SHA1(appid+"UZ"+appkeys+"UZ"+now)+"."+now;

let http  = Axios.create({
    baseURL:"https://d.apicloud.com/mcm/api/",
    timeout:10000,
    headers:{
        "X-APICloud-AppId": `${appid}`,
        "X-APICloud-AppKey": `${appkey}`,
        "Content-type":"application/json;charset=UTF-8"
    }
});

http.interceptors.request.use(
    config=>{
        if(getCookie('token') != null ||getCookie('token') != ''){
            config.headers['authorization']=getCookie('token');
        }
    }
)

export default http;






