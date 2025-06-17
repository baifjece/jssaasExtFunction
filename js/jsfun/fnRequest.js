//================================================================================
//说明：Request请求实体操作
//================================================================================


// jsa._putProp("json", r.newNativeFunc(r.builtinJSA_Request_PayLoad, "json", 0), true, false, true)
// jsa._putProp("file", r.newNativeFunc(r.builtinJSA_Request_File, "file", 0), true, false, true)

/**
 * 取得请求ID
 * @returns {string}
 */
function fnRequest_id() {
    let result = JsaRequest.id()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得Header值
 * @param {string} key
 * @returns {  string}
 */
function fnRequest_headerGet(key) {
    let result = JsaRequest.headerGet(key)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得全部的头部信息
 * @returns {[]}
 */
function fnRequest_headerAll() {
    let result = JsaRequest.headerAll()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 请求请求BOdy数据
 * @returns {string}
 */
function fnRequest_body() {
    let result = JsaRequest.body()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得客户端IP地址
 * @returns { string}
 */
function fnRequest_clientIP() {
    let result = JsaRequest.clientIP()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}
/**
 * 取得URL地址
 * @returns { string}
 */
function fnRequest_host() {
    let result = JsaRequest.host()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}
/**
 * 取得URL地址
 * @returns { string}
 */
function fnRequest_url() {
    let result = JsaRequest.url()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得URL完整地址
 * @param {boolean} isContainSeheme 是否包http或者https
 * @returns {string}
 */
function fnRequest_urlFull(isContainSeheme=false) {
    let result = JsaRequest.urlFull(isContainSeheme)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 取得请求参数，不支持返回数组
 * @returns { {}}
 */
function fnRequest_get() {
    let result = JsaRequest.get()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得请求参数，以数组形式返回
 * @returns {{}}
 */
function fnRequest_getArray() {
    let result = JsaRequest.getArray()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}
/**
 * 取得动态地址正则表达式解析的参数
 * @returns {string[]}
 */
function fnRequest_urlParams() {
    let result = JsaRequest.urlParams()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得Post参数，不支持返回数组
 * @returns {{}}
 */
function fnRequest_post() {
    let result = JsaRequest.post()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得Post参数，以数组形式返回
 * @returns {{}}
 */
function fnRequest_postArray() {
    let result = JsaRequest.postArray()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 取得Post payload数据 json数据结构
 * @returns {  {}}
 */
function fnRequest_json() {
    let result = JsaRequest.json()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得请求参数(get,post)，不支持返回数组
 * @returns {{msg: string, code: number, data: {}}}
 */
function fnRequest_form() {
    let result = JsaRequest.form()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得请求参数(get,post)，以数组形式返回
 * @returns {{msg: string, code: number, data: []}
 */
function fnRequest_formArray() {
    let result = JsaRequest.formArray()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得上传文件数据,支持多个上传文件
 * @param isContainContent
 * @returns {{fileAAA: GoUpFile, fileBBB: GoUpFile}}
 */
function fnRequest_file(isContainContent=false) {
    let result = JsaRequest.file(isContainContent)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得第一个上传文件数据
 * @param isContainContent
 * @returns {GoUpFile}
 */
function fnRequest_fileFirst(isContainContent=false) {
    let result = JsaRequest.fileFirst(isContainContent)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 保存上传文件数据到本地,只支持一个上传文件
 * @param filePath
 * @param fileNameOrIndex 上传组件名称或上传组件索引（按名称排序）,默认为第一个
 * @returns {boolean}
 */
function fnRequest_fileSave(filePath,fileNameOrIndex="") {
    let result = JsaRequest.fileSave(filePath,fileNameOrIndex)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}



