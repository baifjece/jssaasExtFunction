//===============================================================================
//说明：
//================================================================================

/**
 * 强制终止执行，输出文本,content-type:text/plain; charset=utf-8
 * 同throw返回的 content-type为空（默认为text/plain），但更灵活，可自定义设置content-type
 * @param {string} msg
 */
function fnJsa_exit(msg) {
    Jsa.exit(msg)
}

/**
 * 强制终止执行，以Json格式输出文本，content-type:application/json; charset=utf-8
 * @param {string} json
 */
function fnJsa_exitJson(json){
    Jsa.exitJson(json)
}

/**
 * 强制终止执行，以HMTL格式输出文本，content-type:text/html; charset=utf-8
 * @param {string} html
 */
function fnJsa_exitHtml(html){
    Jsa.exitHtml(html)
}

/**
 * 取得jssaas平台执行的目录
 * @returns {string}
 */
function fnJsa_rootPath() {
    let result = Jsa.rootPath()
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data 
}

/**
 * 取得jssaas平台jscode目录
 * @returns {string}
 */
function fnJsa_jsCodePath() {
    let result = Jsa.jsCodePath()
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 判断当前执行是否是异步执行
 * @returns {boolean}
 */
function fnJsa_isAsync() {

    let result = Jsa.isAsync();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 执行环境
 * @returns {string}
 */
function fnJsa_name(){
    let result = Jsa.name();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 运行模式
 * @returns {string}
 */
function fnJsa_runMode(){
    let result = Jsa.runMode();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 数据库模式
 * @returns {string}
 */
function fnJsa_dbMode(){
    let result = Jsa.dbMode();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 执行环境,config.json配置值
 * @returns {{PathJscode: string, Projectname: string, Hostport: string, Version: string, DbOpt: string, Promode: string, Team: string, Dbtype: string}}
 */
function fnJsa_env(){
    let result = Jsa.env();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}


/**
 * 是否是WEB项目
 * @returns {boolean}
 */
function fnJsa_isWeb() {
    let result = Jsa.isWeb();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}


/**
 * JSsaas版本
 * @returns {string}
 */
function fnJsa_version(){
    let result = Jsa.version();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 定时任务数据
 * @returns {{FunName: string, IsCrond: boolean, ProjectName: string, Jssaas_crond: string, Descript: string, IsMain: boolean, Error: {}, Jssaas_urlroot: string, Jssaas_log: string, IsInit: boolean, Jssaas_title: string, Content: string, Jssaas_timeout: number, IsEvent: boolean, Jssaas_url: string, IsAsync: boolean, Jssaas_method: {}}[]}
 */
function fnJsa_dataCrond(){
    let result = Jsa.dataCrond();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 事件配置数据
 * @returns {{SyncErrorContinue: boolean, Async: {Function: string, Timeout: number, Title: string}[], Title: string, Id: string, Sync: {Function: string, Timeout: number, Title: string}[]}[]}
 */
function fnJsa_dataEventConfig(){
    let result = Jsa.dataEventConfig();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 事件数据
 * @returns {{FunName: string, IsCrond: boolean, ProjectName: string, Jssaas_crond: string, Descript: string, IsMain: boolean, Error: {}, Jssaas_urlroot: string, Jssaas_log: string, IsInit: boolean, Jssaas_title: string, Content: string, Jssaas_timeout: number, IsEvent: boolean, Jssaas_url: string, IsAsync: boolean, Jssaas_method: {}}[]}
 */
function fnJsa_dataEvent(){
    let result = Jsa.dataEvent();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 初始化数据
 * @returns {{FunName: string, IsCrond: boolean, ProjectName: string, Jssaas_crond: string, Descript: string, IsMain: boolean, Error: {}, Jssaas_urlroot: string, Jssaas_log: string, IsInit: boolean, Jssaas_title: string, Content: string, Jssaas_timeout: number, IsEvent: boolean, Jssaas_url: string, IsAsync: boolean, Jssaas_method: {}}[]}
 */
function fnJsa_dataInit(){
    let result = Jsa.dataInit();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 入口函数数据
 * @returns {{FunName: string, IsCrond: boolean, ProjectName: string, Jssaas_crond: string, Descript: string, IsMain: boolean, Error: {}, Jssaas_urlroot: string, Jssaas_log: string, IsInit: boolean, Jssaas_title: string, Content: string, Jssaas_timeout: number, IsEvent: boolean, Jssaas_url: string, IsAsync: boolean, Jssaas_method: {}}[]}
 */
function fnJsa_dataMain(){
    let result = Jsa.dataMain();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}


/**
 * 请求地址
 * @returns {{data: {post: {FunName: string, Title: string, Params: {}, Method: string, Url: string}, get: {FunName: string, Title: string, Params: {}, Method: string, Url: string}}, url: string}[]}
 */
function fnJsa_dataUrl(){
    let result = Jsa.dataUrl();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 执行函数
 * @returns {{FunName: string, IsCrond: boolean, ProjectName: string, Jssaas_crond: string, Descript: string, IsMain: boolean, Error: {}, Jssaas_urlroot: string, Jssaas_log: string, IsInit: boolean, Jssaas_title: string, Content: string, Jssaas_timeout: number, IsEvent: boolean, Jssaas_url: string, IsAsync: boolean, Jssaas_method: {}}[]}
 */
function fnJsa_dataFun(){
    let result = Jsa.dataFun();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 *
 * @returns {{MssqlPassword: *, MysqlLoginpwd: *, DbType: *, MysqlServer: *, MysqlDbname: *, SqliteDataSourceName: *, MysqlLoginname: *, TableNamePrefix: *, MssqlUserid: *, MssqlEncrypt: *, SqliteDriverName: *, MysqlPort: number, MssqlServer: *, MssqlDatabase: *, MssqlPort: *}[]}
 */
function fnJsa_dbConn() {
    let result = Jsa.dbConn();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 取得global.js文件内容
 * @returns {string}
 */
function fnJsa_globalJs() {
    let result = Jsa.globalJs();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}


/**
 * 微服务项目列表
 * @returns {[string]}
 */
function fnJsa_microservices() {
    let result = Jsa.microservices();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 执行的函数名
 * @returns {string}
 */
function fnJsa_funName() {
    let result = Jsa.funName();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 执行的事件名称
 * @returns {{msg: string, code: number, data: string}}
 */
function fnJsa_eventName() {
    let result = Jsa.eventName();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

function fnJsa_funJssaas(){
    let result = Jsa.funJssaas();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 刷新jscode/log.config 配置信息
 * @returns {boolean}
 */
function fnJsa_refreshLogConfig(){
    let result = JSA_ext_refreshLogConfig();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 刷新jscode/app.config 配置信息
 * @returns {boolean}
 */
function fnJsa_refreshAppConfig(){
    let result = JSA_ext_refreshAppConfig();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 刷新Globaljs数据
 * @returns {boolean}
 */
function fnJsa_refreshGlobalJS(){
    let result = JSA_ext_refreshGlobalJS();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 刷新数据库配置
 * @returns {boolean}
 */
function fnJsa_refreshDatabase(){
    let result = JSA_ext_refreshDatabase();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 刷新init数据
 * @returns {boolean}
 */
function fnJsa_refreshInit(){
    let result = JSA_ext_refreshInit();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 刷新crond数据
 * @returns {boolean}
 */
function fnJsa_refreshCrond(){
    let result = JSA_ext_refreshCrond();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 删除全部定时任务，并重新加载全部的crond数据
 * @returns {boolean}
 */
function fnJsa_removeAllAndReloadCrond(){
    let result = JSA_ext_removeAllAndReloadCrond();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 删除全部定时任务，并重新加载全部的crond数据
 * @returns {boolean}
 */
function fnJsa_removeAllCrond(){
    let result = JSA_ext_removeAllCrond();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 刷新event数据
 * @returns {boolean}
 */
function fnJsa_refreshEvent(){
    let result = JSA_ext_refreshEvent();
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 刷新js数据
 * @param funName 主函数名称，不支持event主函数
 * @returns {boolean}
 */
function fnJsa_refreshMain(funName=undefined){
    let result = JSA_ext_refreshMain(funName);
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

