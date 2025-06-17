//================================================================================
//说明：时间操作
//================================================================================


/**
 * 单个进程异步执行，无返回值；在保存需要验证函数是否存在如：fnThread_async("async_jia_dal_ad_info",{"user":""})
 * @param {string} jsFunName 函数名称必须是字符串
 * @param {*} param
 */
function fnThread_async(jsFunName, param) {
    let result=JsaThread.async(jsFunName,param);
    if(result.code<0){
        throw("执行fnAsync_run异常："+ result.msg);
    }

    return;
}

/**
 * 多个进程异步执行，最终返回数据；在保存需要验证函数是否存在，最后一个变量为调用函数的参数集合，该代码不能换行
 * @param args jsFuncList  fnThread_asyncGroup("fnRequestImg", "fnRequestImg", "fnRequestImg", "fnRequestImg","fnRequestImg",data)
 */
function fnThread_asyncGroup(...args) {
    let result=JsaThread.asyncGroup(...args);
    if(result.code<0){
        throw("执行fnAsync_runGroup异常："+result.msg);
    }

    return result.data;
}



/**
 * 当前执行休眠，单位毫秒
 * @param {number} MilliSecond 毫秒
 * @returns { boolean}
 */
function fnThread_sleep(MilliSecond) {
    let result = JsaThread.sleep(MilliSecond)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}
