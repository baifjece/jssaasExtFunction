//================================================================================
//说明：图片操作
//================================================================================

/**
 * 将base64图片保存到本地
 * @param {string} base64content base64图片内容
 * @param {string} filePathName
 * @returns {boolean}
 */
function fnBase64_save(base64content, filePathName) {
    let result = JsaBase64.save(base64content, filePathName)
    if (result.code < 0) {
        throw(result.msg)
    }
    return result.data;
}
