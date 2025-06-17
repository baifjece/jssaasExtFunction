//================================================================================
//说明：lock 加锁/解锁
//================================================================================



    /**
     * 加入锁，只有解锁后才下一个执行到该代码才可以继续执行
     * @param {number} lockIndex 锁索引ID，（1～X）
     * @param {number} autoRealseMillisecond 默认100毫秒 自动释放该锁时间毫秒，防止出现意外情况，无法执行到解锁代码，最小值10
     * @returns {boolean}
     */
    function fnLock_lock(lockIndex, autoRealseMillisecond=100) {
        let result = JsaLock.lock(lockIndex, autoRealseMillisecond)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }


    /**
     * 解锁
     * @param {number} lockName 锁索引ID，从1开始
     * @returns {boolean}
     */
    function fnLock_unlock(lockIndex) {
        let result = JsaLock.unlock(lockIndex)
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }


    /**
     * 锁列表
     * @returns {Array}
     */
    function fnLock_list() {
        let result = JsaLock.list()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }


    /**
     * 可支持锁的总数
     * @returns {number}
     */
    function fnLock_maxLockNum() {
        let result = JsaLock.maxLockNum()
        if (result.code < 0) {
            throw (result.msg)
        }
        return result.data;
    }




  