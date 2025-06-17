//================================================================================
//说明：Session操作
//================================================================================


/**
 * 取得内部资源文件的文本值
 * @returns {string}
 */
function fnInnerResouce_getString( file) {
    let result = JsaInnerResource.getString(file )
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得内部资源文件的二进制数组
 * @returns {Uint8Array}
 */
function fnInnerResouce_getBytes(file ) {
    let result = JsaInnerResource.getBytes(file )
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

