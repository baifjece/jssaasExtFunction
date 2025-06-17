//================================================================================
//说明：HTTP请求
//================================================================================

    /**
     * GET请求
     * @param {string} url
     * @param {Object} data obj对象{"title":"aaaa,"id":123}
     * @returns {string}
     */
    function fnHttp_get(url,data=undefined) {
        let result = JsaHttp.get(url,data);
        if (result.code < 0) {
            throw(result.msg);
        }
        if(result.statusCode!=200){
            console.error(result)
            throw("请求非正常返回");
        }
        return result.data
    }

    /**
     * POST请求
     * @param {string} url
     * @param {Object} formData
     * @returns {string}
     */
    function fnHttp_postForm(url,formData=undefined){
        let result = JsaHttp.postForm(url,formData);
        if (result.code < 0) {
            throw(result.msg);
        }
        if(result.statusCode!=200){
            throw("请求非正常返回");
        }
        return result.data
    }

    /**
     * POST 请求
     * @param {string} url
     * @param {Object} payload
     * @returns {string}
     */
    function fnHttp_postJSON(url,payload=undefined){
        let result = JsaHttp.postJSON(url,payload);
        if (result.code < 0) {
            throw(result.msg);
        }
        if(result.statusCode!=200){
            throw("请求非正常返回");
        }
        return result.data
    }

    /**
     * POST 请求
     * @param {string} url
     * @param {string} body
     * @returns {string}
     */
    function fnHttp_postText(url,body=undefined){
        let result = JsaHttp.postText(url,body);
        if (result.code < 0) {
            throw(result.msg);
        }
        if(result.statusCode!=200){
            throw("请求非正常返回");
        }
        return result.data
    }

    /**
     * 自定义请求
     * @param {string} url
     * @param {Object} option {"method":"get","timeout":2000,"body":"","header":{"aa":"aa"},"cookie":{"bb":"bb"}}
     * @returns {string}
     */
    function fnHttp_option(url,option){
        let result = JsaHttp.option(url,option);
        if (result.code < 0) {
            throw(result.msg);
        }
        if(result.statusCode!=200){
            throw("请求非正常返回");
        }
        return result.data
    }

    /**
     * 取得互联网文件流
     * @param {string} url
     * @param {Object} option {"method":"get","timeout":2000,"body":"","header":{"aa":"aa"},"cookie":{"bb":"bb"}}
     * @returns {Uint8Array}
     */
    function fnHttp_optionBytes(url,option) {
        let result = JsaHttp.optionBytes(url,option);
        if (result.code < 0) {
            throw(result.msg);
        }
        if(result.statusCode!=200){
            throw("请求非正常返回");
        }
        return result.data
    }

