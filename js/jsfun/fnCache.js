//================================================================================
//说明：全局应用内环境（应用内存缓存，速度最快）
//================================================================================

/**
 * 取得应用内缓存
 * @param {string} key
 * @returns {{}}
 */
function fnCache_get(key) {
    let result = JsaCache.get(key);
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 取得应用内缓存详细信息
 * @param {string} key
 * @returns {{}}
 */
function fnCache_getInfo(key) {
    let result = JsaCache.getInfo(key);
    if (result.code < 0) {
        throw(result.msg);
    }

    return result.data
}

/**
 * 配置应用内缓存
 * @param {string} key
 * @param {*} value
 * @param {number} expire 默认为0 过期值，小于1000000000为秒数，大于表示时间戳,0为无过期时间
 */
function fnCache_set(key,value,expire=0) {
    let result = JsaCache.set(key,value,expire);
    if (result.code < 0) {
        throw(result.msg);
    }
    return
}

/**
 * 移除应用内缓存
 * @param {string} key
 */
function fnCache_remove(key) {
    let result = JsaCache.remove(key);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * 应用内缓存回收资源，系统定期自动回收
 */
function fnCache_gc() {
    JsaCache.gc();
}

/**
 * 取得全局缓存列表
 * @param {string} key
 * @returns {{}}
 */
function fnCache_listGet(key) {
    let result = JsaCache.listGet(key);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * 取得全局列表详细信息
 * @param {string} key
 * @returns {{}}
 */
function fnCache_listGetInfo(key) {
    let result = JsaCache.listGetInfo(key);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * 增加列表子项
 * @param {string} key
 * @param {*} value
 * @param {number}expire 默认为0 过期值，小于1000000000为秒数，大于表示时间戳,0:无过期时间；
 * @returns {{}}
 */
function fnCache_listPush(key,value,expire=0) {
    let result = JsaCache.listPush(key,value,expire);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * 插入列表子项
 * @param {string} key
 * @param {*} value
 * @param {number} index 认为0 从0开始
 * @param {number} expire 默认为0设置列表过期值，小于1000000000为秒数，大于表示时间戳,0:不重置；
 * @returns {{}}
 */
function fnCache_listInsert(key,value,index,expire=0) {
    let result = JsaCache.listInsert(key,value,index,expire);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * 弹出列表最后一项
 * @param {string} key
 * @returns {{}}
 */
function fnCache_listPop(key) {
    let result = JsaCache.listPop(key);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * 弹出列表第一项
 * @param {string} key
 * @returns {{}}
 */
function fnCache_listShift(key) {
    let result = JsaCache.listShift(key);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
* 弹出列表第一项
 * @param {string} key
 * @param {number} index 默认为0 从0开始
* @returns {{}}
*/
function fnCache_listDelete(key,index=0) {
    let result = JsaCache.listDelete(key,index);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * 删除列表
 * @param {string} key
 * @returns {{}}
 */
function fnCache_listRemove(key) {
    let result = JsaCache.listRemove(key);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}
