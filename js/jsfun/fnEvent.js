//================================================================================
//说明：事件
//================================================================================


    
    /**
     * 触发事件执行
     * @param {string} key
     * @param {Object} value
     * @returns boolean
     */
    function fnEvent_call(eventFun, params) {
        let result = JsaEvent.call(eventFun,params);
        if (result.code < 0) {
            throw(result.msg);
        }
        return result.data
    }


