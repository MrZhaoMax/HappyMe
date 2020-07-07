import { Object } from "core-js";



//检测字符是否为数字
function checkingNumber(objectmsg){
 var bools = isNaN(objectmsg);
 if(!bools)
    return {data="",code=500,err_msg = "不为数字！"};

}

//检测字符是否为字符串
function checkingString(objectmsg){
   if(!typeof(objectmsg))
         return {data="",code=500,err_msg = "不为数字！"};
     return {data="",code=500,err_msg = "不为数字！"};
    Object.getPrototypeOf.prototyp
}

//检测字符是否为空
function checkingIsNull(objectmsg){

}

//检测数据是否为数组类型 
function checkingArray(objectmsg){
   try {
       var bools = (typeof objectmsg == 'object' && objectmsg.constructor == Array);
       if(!bools)
         return {data="",code=500,err_msg = "不为数字！"};
        return true;
   } catch (error) {
       
   }
}


一.判断

<script type="text/javascript"> 

//<![CDATA[ 
var a=[0]; 
document.write(isArray(a),'<br/>'); 
function isArray(obj){ 
return (typeof obj=='object')&&obj.constructor==Array; 
} 
//]]> 
</script> 
 
二.判断是否为字符串类型 
 
<script type="text/javascript"> 
//<![CDATA[ 
document.write(isString('test'),'<br/>'); 
document.write(isString(10),'<br/>'); 
function isString(str){ 
return (typeof str=='string')&&str.constructor==String; 
} 
//]]> 
</script> 
 
三.判断是否为数值类型 
<script type="text/javascript"> 
//<![CDATA[ 
document.write(isNumber('test'),'<br/>'); 
document.write(isNumber(10),'<br/>'); 
function isNumber(obj){ 
return (typeof obj=='number')&&obj.constructor==Number; 
} 
//]]> 
</script>
 
四.判断是否为日期类型 
<script type="text/javascript"> 
//<![CDATA[ 
document.write(isDate(new Date()),'<br/>'); 
document.write(isDate(10),'<br/>'); 
function isDate(obj){ 
return (typeof obj=='object')&&obj.constructor==Date; 
} 
//]]> 
</script> 
 
五.判断是否为函数 
<script type="text/javascript"> 
//<![CDATA[ 
document.write(isFunction(function test(){}),'<br/>'); 
document.write(isFunction(10),'<br/>'); 
function isFunction(obj){ 
return (typeof obj=='function')&&obj.constructor==Function; 
} 
//]]> 
</script> 
 
六.判断是否为对象 
<script type="text/javascript"> 
//<![CDATA[ 
document.write(isObject(new Object()),'<br/>'); 
document.write(isObject(10),'<br/>'); 
function isObject(obj){ 
return (typeof obj=='object')&&obj.constructor==Object; 
} 
//]]> 
</script> 




