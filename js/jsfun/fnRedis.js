//================================================================================
//说明：redis 缓存
//================================================================================


/**
 * 初始化Redis
 * @param {string} addr
 * @param {string} pwd
 * @param {number} usedb
 * @returns { boolean}
 */
function fnRedis_init(addr = "localhost:6379", pwd = "", usedb = 0) {
    let result = JsaRedis.init(addr, pwd, usedb)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 设置Redis缓存
 * @param {string} key
 * @param {*}value
 * @param {number} expireSecond 过期秒数,0为不过期
 * @returns { boolean}
 */
function fnRedis_set(key, value, expireSecond=0) {
    let result = JsaRedis.set(key, value, expireSecond)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 删除指定缓存
 * @param {string} key
 * @returns { boolean}
 */
function fnRedis_remove(key) {
    let result = JsaRedis.remove(key)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得缓存
 * @param {string} key
 * @returns {{}}
 */
function fnRedis_get(key) {
    let result = JsaRedis.get(key)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得字符串缓存
 * @param {string} key
 * @returns { string}
 */
function fnRedis_getString(key) {
    let result = JsaRedis.getString(key)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得数字缓存
 * @param {string} key
 * @returns { number}
 */
function fnRedis_getFloat(key) {
    let result = JsaRedis.getFloat(key)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得数字缓存
 * @param {string} key
 * @returns {boolean}
 */
function fnRedis_getBool(key) {
    let result = JsaRedis.getBool(key)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得数组缓存
 * @param {string} key
 * @returns {[]}
 */
function fnRedis_getArray(key) {
    let result = JsaRedis.getArray(key)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得数组的KeyValue缓存
 * @param {string} key
 * @returns {{}}
 */
function fnRedis_getMap(key) {
    let result = JsaRedis.getMap(key)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

