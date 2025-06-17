//================================================================================
//说明：加密操作
//================================================================================



    /**
     * MD5加密
     * @param {string} content 需要加密的内容
     * @returns string
     */
    function fnCrypto_md5(content){
        let result = JsaCrypto.md5(content);
        if (result.code < 0) {
            throw(result.msg);
        }
        return result.data
    }


    /**
     * AES加密 （推荐）
     * @param {string} content 需要加密的内容
     * @param {string} salt 盐值
     * @returns string
     */
    function fnCrypto_aesEncrypt(content, salt){
        let result = JsaCrypto.aesEncrypt(content,salt);
        if (result.code < 0) {
            throw(result.msg);
        }
        return result.data
    }

    /**
     * AES解密
     * @param {string} content 需要解密的内容
     * @param {string} salt 盐值
     * @returns string
     */
    function fnCrypto_aesDecrypt(content,salt){
        let result = JsaCrypto.aesDecrypt(content,salt);
        if (result.code < 0) {
            throw(result.msg);
        }
        return result.data
    }


/**
 * DES ecb加密 （早期加密算法，不推荐）
 * @param {string} content 需要加密的内容
 * @param {string} salt 盐值
 * @returns {string}
 */
function fnCrypto_desEcbEncrypt(content, salt){
    let result = JsaCrypto.desEcbEncrypt(content,salt);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * DES ecb 解密
 * @param {string} content 需要解密的内容
 * @param {string} salt 盐值
 * @returns {string}
 */
function fnCrypto_desEcbDecrypt(content,salt){
    let result = JsaCrypto.desEcbDecrypt(content,salt);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * DES cbc加密
 * @param {string} content 需要加密的内容
 * @param {string} salt 盐值
 * @returns {string}
 */
function fnCrypto_desCbcEncrypt(content, salt){
    let result = JsaCrypto.desCbcEncrypt(content,salt);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * DES cbc解密
 * @param {string} content 需要解密的内容
 * @param {string} salt 盐值
 * @returns {string}
 */
function fnCrypto_desCbcDecrypt(content,salt){
    let result = JsaCrypto.desCbcDecrypt(content,salt);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * RSA 加密
 * @param {string} content 需要加密的内容
 * @param {string} publickey 公钥
 * @returns {string}
 */
function fnCrypto_rsaEncrypt(content, publickey){
    let result = JsaCrypto.rsaEncrypt(content,publickey);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * RSA解密
 * @param {string} content 需要解密的内容
 * @param {string} privatekey 私钥 ,只支持PKCS1
 * @returns {string}
 */
function fnCrypto_rsaDecrypt(content,privatekey){
    let result = JsaCrypto.rsaDecrypt(content,privatekey);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * hmacSha1加密
 * @param key 盐值
 * @param content 需要加密的内容
 * @returns {Uint8Array}
 */
function fnCrypto_hmacSha1(key,content){
    let result = JsaCrypto.hmacSha1(key,content);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * hmacSha256加密
 * @param key 盐值
 * @param content 需要加密的内容
 * @returns {Uint8Array}
 */
function fnCrypto_hmacSha256(key,content){
    let result = JsaCrypto.hmacSha256(key,content);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

/**
 * hmacSha512加密
 * @param key 盐值
 * @param content 需要加密的内容
 * @returns {{msg: string, code: number, data: string}}
 */
function fnCrypto_hmacSha512(key,content){
    let result = JsaCrypto.hmacSha512(key,content);
    if (result.code < 0) {
        throw(result.msg);
    }
    return result.data
}

