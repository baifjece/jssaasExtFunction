//================================================================================
//说明：自带生命周期的队列操作
//================================================================================



    /**
     * 当前请的队列元素索引
     * @returns {string}
     */
    function fnQueueSelftime_getID() {
        let result = JsaQueueSelfTime.getID()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 队列自动清除本次请求，防止未执行到pop
     * @param {string} queueKey
     * @param {number} waitMillisecond
     * @param {string} ID 队列元素索引值
     * @returns {boolean}
     */
    function fnQueueSelftime_autoDelete(queueKey, waitMillisecond = 10, ID = ""){
        let result = JsaQueueSelfTime.autoDelete(queueKey, waitMillisecond , ID )
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
    function fnQueueSelftime_clear(queueKey) {
        let result = JsaQueueSelfTime.clear(queueKey)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 队列长度
     * @param {string} queueKey
     * @returns { number}
     */
    function fnQueueSelftime_len(queueKey) {
        let result = JsaQueueSelfTime.len(queueKey)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 队列首元素值
     * @param {string} queueKey
     * @returns {  string}
     */
    function fnQueueSelftime_first(queueKey) {
        let result = JsaQueueSelfTime.first(queueKey)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 判断当前请求是否是队列等首位元素，队列长度为0时，返回false
     * @param {string}queueKey
     * @param {string}elementID 元素值，为空默认为HTTP都请求ID
     * @returns {boolean}
     */
    function fnQueueSelftime_isfirst(queueKey, elementID = "") {
        let result = JsaQueueSelfTime.isfirst(queueKey, elementID )
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 队列弹出首元素
     * @param {string} queueKey
     * @returns {  {}}
     */
    function fnQueueSelftime_pop(queueKey) {
        let result = JsaQueueSelfTime.pop(queueKey)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 队列新增元素在最后一个位置
     * @param {string}queueKey
     * @param {string}elementID 元素值，为空默认为HTTP都请求ID
     * @returns { boolean}
     */
    function fnQueueSelftime_push(queueKey, elementID = "") {
        let result = JsaQueueSelfTime.push(queueKey, elementID )
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 从队列删除当前请求
     * @param {string}queueKey
     * @param {string}elementID 元素值，为空默认为HTTP都请求ID
     * @returns { boolean}
     */
    function fnQueueSelftime_delete(queueKey, elementID = "") {
        let result = JsaQueueSelfTime.delete(queueKey, elementID )
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 队列元素位置
     * @param {string}queueKey
     * @param {string}elementID 元素值，为空默认为HTTP都请求ID
     * @returns { number}
     */
    function fnQueueSelftime_index(queueKey, elementID = "") {
        let result = JsaQueueSelfTime.index(queueKey, elementID )
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
    function fnQueueSelftime_list(queueKey) {
        let result = JsaQueueSelfTime.list(queueKey)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }

    /**
     * 全部队列元素列表
     * @returns {[]}
     */
    function fnQueueSelftime_alllist() {
        let result = JsaQueueSelfTime.alllist()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }



