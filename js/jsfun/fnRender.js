//================================================================================
//说明： 入口函数渲染函数，跳出函数用
//================================================================================

/**
 * 请求返回结果，JSON结构
 * @param {*} data json数据
 * @param {number} code
 * @param {string} msg
 * @returns {{data:null|*, code: number, msg: string}}
 */
function fnRender_json(data=null, code = 0, msg = "") {
    if (!data) {
        data = {"data":null,"code": 0, "msg": ""}
    }
    if (!data["code"]) {
        data["code"] = code ? code : 0
    }
    if (!data["msg"]) {
        data["msg"] = msg ? msg : ""
    }
    if (!data["data"]) {
        data["data"] =null
    }
    data["time"] = fnDate_now()

    if (!data["_HEADER"]) {
        data["_HEADER"] = {"Content-Type": "application/json;charset=utf-8"}
    }

    // console.debug("执行结果：",JSON.stringify(  data))
    return data
}


/**
 * 请求返回错误的JSON结果
 * @param {string} msg
 * @param {number} code
 * @returns {{code: number, msg: string, time}}
 */
function fnRender_error(msg="", code = -199) {
    if (msg == "") {
        msg = "数据丢失，请重新操作！"
    }

    if (!code) {
        code = -199;
    }
    let t = fnDate_now()
    let data = {"code": code, "msg": msg, "time": t}
    data["_HEADER"] = {"Content-Type": "application/json;charset=utf-8"}
    return data;
}


/**
 * 请求返回结果，HMTL结构
 * @param {string} html
 * @returns {{code: number, msg: string}}
 */
function fnRender_html(html) {
    let result = {"_HEADER": {"Content-Type": "text/html;charset=utf-8"}, "_BODY": html}
    return fnRender_json(result)
}

/**
 * 302状态
 * @param {string} url
 * @returns {boolean}
 */
function fnRender_redirect(url) {
    return fnResponse_redirect(url)
}

/**
 * 输出文本
 * @param {string} bodyTxt
 * @returns {{data: (*|null), code: number, msg: string}}
 */
function fnRender_text(bodyTxt) {
    let result = {"_HEADER": {"Content-Type": "text/plain;charset=utf-8"}, "_BODY": bodyTxt}
    return fnRender_json(result)
}


/**
 * 导出文件
 * @param {string} downFileName
 * @param {Uint8Array} fileContentBytes 字节数组
 * @returns {{code: number, msg: string}}
 */
function fnRender_exportFile(downFileName, fileContentBytes) {
    let result = {
        "_HEADER": {
            "Content-Type": "application/octet-stream",
            "Content-Disposition": "attachment; filename=" + downFileName
        }, "_BODY": fileContentBytes
    }
    return fnRender_json(result)
}

/**
 * 请求返回结果，下载流文件
 * @param {Object} headerObject
 * @param {Uint8Array} bodyBytes
 * @returns {{code: number, msg: string}}
 */
function fnRender_fileByte(headerObject, bodyBytes) {
    let result = {"_HEADER": headerObject, "_BYTE": bodyBytes}
    return fnRender_json(result)
}

/**
 * 自定义渲染输出，可配置response头部header值。
 * @param {string} bodyStr 输出内容
 * @param {Object} headerObject response头部信息，header集合值
 * @returns {{code: number, msg: string}}
 */
function fnRender_option(bodyStr, headerObject) {
    let result = {"_HEADER": headerObject, "_BODY": bodyStr}
    return fnRender_json(result)
}

/**
 * 渲染模板页面
 * @param {string} pHTMLTemplate 模板内容
 * @param {*} pData 渲染数据
 * @returns {*}
 */
function fnRender_templateContent(pHTMLTemplate, pData = undefined) {
    let result = fnTemplate_render(pHTMLTemplate, pData);
    return result;
}

/**
 * 渲染模板页面
 * @param {string} templateFile 模板内容
 * @param {*} pData 渲染数据
 * @returns {*}
 */
function fnRender_template(templateFile, pData = undefined) {
    let jsPath = fnJsa_jsCodePath()
    let html = fnFile_getFileContent(jsPath + "/" + templateFile)
    if (html == "") {
        fnJsa_exitHtml("模板文件读取失败，文件：$JSCODEPATH$" + templateFile)
        return
    }
    let tpl = fnTemplate_render(html, pData);
    return fnRender_html(tpl)
}

/**
 * 没数据返回
 * @param {string} msg
 * @returns {{code: number, msg: string}}
 */
function fnRender_nodata(msg) {
    if(!msg){
        msg="没有可用的数据"
    }
    return fnRender_template("/html/nodata.html", {"msg": msg});
}


/**
 * 输出单条数据info
 * @param {Object} data
 * @param {string} msg
 * @returns {{data:*, code: number, msg: string}}
 */
function fnRender_info(data,msg="") {
    let result={"data":data,"msg":msg,"code":0}
    return fnRender_json(result)
}

/**
 * 输出列表数据
 * @param {Array} data
 * @param {string} msg
 * @returns {{data:[],code: number, msg: string}}
 */
function fnRender_list(data,msg="") {
    let result={"data":data,"msg":msg,"code":0}
    return fnRender_json(result)
}

/**
 * 输出分页数据
 * @param {Array} data
 * @param {number} recordcount
 * @param {number} pagecount
 * @returns {{data:{list:[],recordcount:0,pagecount:0},code: number, msg: string}}
 */
function fnRender_page(data,recordcount,pagecount) {
    if(!recordcount)
        recordcount=0;
    if(!pagecount)
        pagecount=0;
    let result={"data":{"list":data,"recordcount":recordcount,"pagecount":pagecount},"msg":"","code":0}
    return fnRender_json(result)
}