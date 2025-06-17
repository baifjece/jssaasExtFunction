//================================================================================
//说明：cookie
//================================================================================
 

    /**
     * 取得COOKIE值
     * @param {string} key
     * @returns string
     */
    function fnCookie_get(key) {
        let result = JsaCookie.get(key);
        if (result.code < 0) {
            throw(result.msg);
        }
        return result.data
    }

    /**
     * 取得全部的COOKIE值
     * @returns []
     */
    function fnCookie_getAll() {
        let result = JsaCookie.getAll();
        if (result.code < 0) {
            throw(result.msg);
        }
        return result.data
    }

    /**
     * 设置COOKIE值，不会更新当前请求的COOKIE,需要下次请求生效
     * @param {string} key
     * @param {string} value
     * @param {number} expire 过期值，小于1000000000为秒数，大于表示时间戳,未配置默认不刷新过期时间；
     * @returns boolean
     */
    function fnCookie_set(key, value,expire=0) {
        let result = JsaCookie.set(key,value,expire);
        if (result.code < 0) {
            throw(result.msg);
        }
        return result.data
    }

    /**
     * 删除COOKIE
     * @param {string} key
     * @returns boolean
     */
    function fnCookie_remove(key) {
        let result = JsaCookie.remove(key);
        if (result.code < 0) {
            throw(result.msg);
        }
        return result.data
    }
 
