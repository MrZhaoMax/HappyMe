/**
 * cookie
 * 赵兴兴
 */

import Cookies from 'js-cookie'

//写入cookie
export function setCookieOBJ(CookieName,CookieObjValue,isLongTime){
    if(isLongTime){
        Cookies.set(CookieName, CookieObjValue, { expires: 7, path: '' });
        return;
    }
    Cookies.set(CookieName, CookieObjValue, { expires: 1, path: '' });
}

//获取 object cookie
export function getCookieOBJ(cookieName){
    return JSON.parse(Cookies.get(cookieName));
}

//获取 cookie
export function getCookie(cookieName){
    return Cookies.get(cookieName);
}

//删除cookie
export function removeCookie(cookieName){
    Cookies.remove(cookieName);
}



