//================================================================================
//说明：Session操作
//================================================================================

/**
 * 初始化客户端cookie名称，默认为GoSessionID
 * @returns { boolean}
 */
function fnSession_start() {
    let result = JsaSession.start()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得Cookie的GoSessionID值
 * @returns { string}}
 */
function fnSession_getID() {
    let result = JsaSession.getID()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得Session值
 * @param {string} key
 * @returns {  {}}
 */
function fnSession_get(key) {
    let result = JsaSession.get(key)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 设置Session值
 * @param {string} key
 * @param {*} value
 * @returns {  boolean}
 */
function fnSession_set(key, value) {
    let result = JsaSession.set(key, value)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 移除session值
 * @param {string} key
 * @returns {  boolean}
 */
function fnSession_remove(key) {
    let result = JsaSession.remove(key)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 移除当前用户的全部session值
 * @returns {  boolean}
 */
function fnSession_removeAll() {
    let result = JsaSession.removeAll()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 清除全部用户的session数据
 * @returns { boolean}
 */
function fnSession_flush() {
    let result = JsaSession.flush()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

