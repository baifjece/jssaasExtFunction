//================================================================================
//说明：编码操作
//================================================================================

/**
 * 字符串转字节数组
 * @param {string} content 字符串
 * @returns {Uint8Array}
 */
function fnEncode_stringToBytes(content) {
    let result = JsaEncode.stringToBytes(content);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * 字符串转字节数组
 * @param {string} content 字符串
 * @returns {String}
 */
function fnEncode_stringToBase64(content) {
    let result = JsaEncode.stringToBase64(content);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}
/**
 * 字节数组转字符串
 * @param {Uint8Array} bytes 字节数组
 * @returns {string}
 */
function fnEncode_bytesToString(bytes){
    let result = JsaEncode.bytesToString(bytes);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}
/**
 * 将二进制数据转为base64数据
 * @param {Uint8Array} bytes
 * @param {boolean} isImage 是否是图片，true，false
 * @returns {string}
 */
function fnEncode_bytesToBase64(bytes,isImage=false) {
    let result = JsaEncode.bytesToBase64(bytes,isImage);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}


/**
 * 将base64数据转为字符串
 * @param {string} base64content
 * @returns {string}
 */
function fnEncode_base64ToString(base64content) {
    let result = JsaEncode.base64ToString(base64content);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * 将base64数据转为字节数组
 * @param {string} base64content
 * @returns {Uint8Array}
 */
function fnEncode_base64ToBytes(base64content) {
    let result = JsaEncode.base64ToBytes(base64content);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}


/**
 * 字节数组转16进制字符串
 * @param {string} content 字符串
 * @returns {string}
 */
function fnEncode_bytesToHex(content) {
    let result = JsaEncode.bytesToHex(content);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}
/**
 * 16进制字符串转字节数组
 * @param {string} content 字符串
 * @returns {Uint8Array}
 */
function fnEncode_hexToBytes(content) {
    let result = JsaEncode.hexToBytes(content);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}
