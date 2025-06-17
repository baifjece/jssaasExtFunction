//===============================================================================
//说明：Response响应实体
//================================================================================


/**
 * 向前端界面输出内容，返回输出的长度，关闭连接
 * @param {string} content
 * @returns { number}
 */
function fnResponse_write(content) {
    let result = JsaResponse.write(content)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 向前端界面追加输出内容，可多次追加
 * @param {string} content
 * @returns {  number}
 */
function fnResponse_append(content) {
    let result = JsaResponse.append(content)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 向前端界面输出头部，需要在输出和HTTP连接关闭前配置
 * @param {Object} headerMap 如{"ttilte":"aaa"}
 * @returns { boolean}
 */
function fnResponse_headerSet(headerMap) {
    let result = JsaResponse.headerSet(headerMap)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 转跳到指定地址，需要在输出和HTTP连接关闭前配置
 * @param {string} url
 * @returns { boolean}
 */
function fnResponse_redirect(url) {
    let result = JsaResponse.redirect(url)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 关闭http请求
 * @returns { boolean}
 */
function fnResponse_closeConnect() {
    let result = JsaResponse.closeConnect()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


