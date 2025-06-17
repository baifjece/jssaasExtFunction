//================================================================================
//说明：栈操作
//================================================================================


/**
 * 栈初始化
 * @param {string} queueKey 栈名称
 * @param {number} roundRobinMillisecond 轮询的周期，默认值：100毫秒,最小值为10毫秒
 * @param {number} liveTimeMillisecond 首元素执行的生命周期，默认值：1000毫秒，元素进入首元素就开始计时，达到生命周期后自动释放（从栈中删除元素）
 * @returns {boolean}
 */
function fnStack_init(queueKey, roundRobinMillisecond = 100, liveTimeMillisecond = 1000) {
    let result = JsaStack.init(queueKey, roundRobinMillisecond, liveTimeMillisecond)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 当前请的栈元素默认索引，如果自定义元素ID可忽略该值
 * @returns {string}
 */
function fnStack_defaultID() {
    let result = JsaStack.defaultID()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 栈初始化数据
 * @param {string} queueKey
 * @returns {{}}
 */
function fnStack_info(queueKey) {
    let result = JsaStack.info(queueKey)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 清除栈
 * @param {string} queueKey
 * @returns {boolean}
 */
function fnStack_clear(queueKey) {
    let result = JsaStack.clear(queueKey)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 清除全部栈
 * @returns {boolean}
 */
function fnStack_clearAll() {
    let result = JsaStack.clearAll()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 栈长度
 * @param {string} queueKey
 * @returns {number}
 */
function fnStack_len(queueKey) {
    let result = JsaStack.len(queueKey)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 栈首元素值
 * @param {string} queueKey
 * @returns {string}
 */
function fnStack_first(queueKey) {
    let result = JsaStack.first(queueKey)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 判断当前请求是否是栈等首位元素，栈长度为0时，返回false
 * @param {string} queueKey
 * @param {string} elementID 元素值，为空默认为HTTP都请求ID
 * @returns {boolean}
 */
function fnStack_isFirst(queueKey, elementID = "") {
    let result = JsaStack.isFirst(queueKey, elementID)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 等待进入栈首元素，直到超时删除该栈元素
 * @param {string} queueKey
 * @param {string} elementID
 * @param {number} timeout 最小超时时间不能小于100毫秒
 * @returns {boolean}
 */
function fnStack_waitToFirst(queueKey, elementID = "", timeout = 10000) {
    let result = JsaStack.waitToFirst(queueKey, elementID,timeout)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 栈弹出首元素
 * @param {string} queueKey
 * @returns {{}}
 */
function fnStack_pop(queueKey) {
    let result = JsaStack.pop(queueKey)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 栈新增元素在最后一个位置
 * @param {string} queueKey
 * @param {string} elementID 元素值，为空默认为HTTP都请求ID
 * @returns {boolean}
 */
function fnStack_push(queueKey, elementID = "") {
    let result = JsaStack.push(queueKey, elementID)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 从栈删除当前请求，不再参与排队
 * @param {string} queueKey
 * @param {string} elementID 元素值，为空默认为HTTP都请求ID
 * @returns {boolean}
 */
function fnStack_delete(queueKey, elementID = "") {
    let result = JsaStack.delete(queueKey, elementID)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 栈元素位置
 * @param {string} queueKey
 * @param {string} elementID 元素值，为空默认为HTTP都请求ID
 * @returns {number}
 */
function fnStack_index(queueKey, elementID = "") {
    let result = JsaStack.index(queueKey, elementID)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 栈元素列表
 * @param {string} queueKey
 * @returns {[]}
 */
function fnStack_list(queueKey) {
    let result = JsaStack.list(queueKey)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 全部栈元素列表
 * @returns {[]}
 */
function fnStack_allList() {
    let result = JsaStack.allList()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}



