//================================================================================
//说明：队列操作
//================================================================================


/**
 * 队列初始化
 * @param {string} queueKey 队列名称
 * @param {number} roundRobinMillisecond 轮询的周期，默认值：100毫秒,最小值为10毫秒
 * @param {number} liveTimeMillisecond 首元素执行的生命周期，默认值：1000毫秒，元素进入首元素就开始计时，达到生命周期后自动释放（从队列中删除元素）
 * @returns {boolean}
 */
function fnQueue_init(queueKey, roundRobinMillisecond = 100, liveTimeMillisecond = 1000) {
    let result = JsaQueue.init(queueKey, roundRobinMillisecond, liveTimeMillisecond)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 当前请的队列元素默认索引，如果自定义元素ID可忽略该值
 * @returns {string}
 */
function fnQueue_defaultID() {
    let result = JsaQueue.defaultID()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 队列初始化数据
 * @param {string} queueKey
 * @returns {{}}
 */
function fnQueue_info(queueKey) {
    let result = JsaQueue.info(queueKey)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 清除队列
 * @param {string} queueKey
 * @returns {boolean}
 */
function fnQueue_clear(queueKey) {
    let result = JsaQueue.clear(queueKey)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 清除全部队列
 * @returns {boolean}
 */
function fnQueue_clearAll() {
    let result = JsaQueue.clearAll()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 队列长度
 * @param {string} queueKey
 * @returns {number}
 */
function fnQueue_len(queueKey) {
    let result = JsaQueue.len(queueKey)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 队列首元素值
 * @param {string} queueKey
 * @returns {string}
 */
function fnQueue_first(queueKey) {
    let result = JsaQueue.first(queueKey)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 判断当前请求是否是队列等首位元素，队列长度为0时，返回false
 * @param {string} queueKey
 * @param {string} elementID 元素值，为空默认为HTTP都请求ID
 * @returns {boolean}
 */
function fnQueue_isFirst(queueKey, elementID = "") {
    let result = JsaQueue.isFirst(queueKey, elementID)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 等待进入队列首元素，直到超时删除该队列元素
 * @param {string} queueKey
 * @param {string} elementID
 * @param {number} timeout 最小超时时间不能小于100毫秒
 * @returns {boolean}
 */
function fnQueue_waitToFirst(queueKey, elementID = "", timeout = 10000) {
    let result = JsaQueue.waitToFirst(queueKey, elementID,timeout)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 队列弹出首元素
 * @param {string} queueKey
 * @returns {{}}
 */
function fnQueue_pop(queueKey) {
    let result = JsaQueue.pop(queueKey)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 队列新增元素在最后一个位置
 * @param {string} queueKey
 * @param {string} elementID 元素值，为空默认为HTTP都请求ID
 * @returns {boolean}
 */
function fnQueue_push(queueKey, elementID = "") {
    let result = JsaQueue.push(queueKey, elementID)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 从队列删除当前请求，不再参与排队
 * @param {string} queueKey
 * @param {string} elementID 元素值，为空默认为HTTP都请求ID
 * @returns {boolean}
 */
function fnQueue_delete(queueKey, elementID = "") {
    let result = JsaQueue.delete(queueKey, elementID)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 队列元素位置
 * @param {string} queueKey
 * @param {string} elementID 元素值，为空默认为HTTP都请求ID
 * @returns {number}
 */
function fnQueue_index(queueKey, elementID = "") {
    let result = JsaQueue.index(queueKey, elementID)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 队列元素列表
 * @param {string} queueKey
 * @returns {[]}
 */
function fnQueue_list(queueKey) {
    let result = JsaQueue.list(queueKey)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 全部队列元素列表
 * @returns {[]}
 */
function fnQueue_allList() {
    let result = JsaQueue.allList()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}



