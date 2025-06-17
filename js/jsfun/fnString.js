//================================================================================
//说明：Session操作
//================================================================================

/**
 * 取得GUID值
 * @param {string} salt
 * @returns {string}
 */
function fnString_guid(salt = undefined) {
    let result = JsaString.guid(salt)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 生产雪花算法的GUID
 * @param {number} machineID
 * @returns   {string}
 */
function fnString_snowflakeGUID(machineID = 0) {
    let result = JsaString.snowflakeGUID(machineID)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 数值转中文
 * @param {string} value
 * @returns { string}
 */
function fnString_numberToChinese(value) {
    let result = JsaString.numberToChinese(value)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 数值转大写中文
 * @param {string} value
 * @returns {string}
 */
function fnString_numberToChineseUppercase(value) {
    let result = JsaString.numberToChineseUppercase(value)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 判断字符串全部是英文
 * @param { string} str
 * @returns {boolean}
 */
function fnString_isAllEnglish(str, isAllLower = false, isAllUpper = false) {
    if (isAllLower) {
        return /^[a-z]+$/.test(str);
    }
    if (isAllUpper) {
        return /^[A-Z]+$/.test(str);
    }

    return /^[A-Za-z]+$/.test(str);
}