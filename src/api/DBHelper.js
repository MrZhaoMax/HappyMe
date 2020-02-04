
/**
 * 2020/02/04
 * 赵兴兴
 */
import http from "./api";
var tableName  = '';
var Data = {};
var tableID = '';

//添加数据，表名+数据
function add(tableName,Data){
    if(tableName=='' || Data == null ||JSON.parse(Data) == ''){
        return '字段不许为空！';
    }

    http.post(`${tableName}`,Data).then(res=>{
        return res;
    }).catch(err=>{
        return err;
    })
}

//更新
function updated(tableID,tableName,Data){
    if(tableName=='' || Data == null || Data == ''){
        return '字段不许为空！';
    }
    if(tableID == ''){
        return 'ID不许为空！';
    }
    http.put(`${tableName}/${tableID}`,Data).then(res=>{
        return res;
    }).catch(err=>{
        return err;
    })
}
//删除
function dele(tableID,tableName){
    if(tableName==''){
        return '表名不许为空！';
    }
    if(tableID == ''){
        return 'ID不许为空！';
    }
    http.delete(`${tableName}/${tableID}`).then(res=>{
        return res;
    }).catch(err=>{
        let error =  errorlist.filter(f=>f === err.status);
        console.log(error);
        return err;
    })
}
//全部
function select(tableName){
    if(tableName == ''){
        return '表名不能为空！'
    }
    http.get(`${tableName}`).then(res=>{
        return res;
    }).catch(err=>{
        let error =  errorlist.filter(f=>f === err.status);
        console.log(error);
        return err;
    })
}
//错误列表
var errorlist = [
    {100:"操作失败"},
    {101:"应用不存在"},
    {102:"数据云服务未开启，请在控制台的云开发中开启！"},
    {103:"您没有应用访问权限"},
    {104:"参数错误"},
    {105:"Class不存在"},
    {106:"Class名称错误"},
    {107:"Class名称已经存在"},
    {108:"连接数据库失败"},
    {109:"内置Class不可删除"},
    {110:"列字段已经存在"},
    {111:"删除Class失败"},
    {112:"删除数据失败"},
    {113:"默认字段不可删除"},
    {114:"删除列失败"},
    {115:"导入数据文件不可为空"},
    {116:"导入数据失败"},
    {117:"导出数据失败"},
    {118:"邮箱格式错误"},
    {119:"邮箱验证未开启, 请在控制台的云开发中开启！"},
    {120:"文件不存在"},
    {121:"文件上传失败"},
    {122:"保存文件失败"},
    {123:"文件大小不能大于20M"},
    {124:"导出数据不存在"}
]
export default {
    add,updated,dele,select
}




