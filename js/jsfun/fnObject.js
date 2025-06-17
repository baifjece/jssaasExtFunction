//================================================================================
//说明：对象操作
//================================================================================

/**
 * 判断对象是否为空
 * @param {*} value
 * @returns {boolean}
 */
function fnObject_isNotNull(value) {
    if(value==null || value===undefined  ){
        return false;
    }

    return true;
}


/**
 * 判断变量有赋值，返回true，bool:true,string:!="",int:!=0,object!={},array.length>0
 * @param {*} value
 * @returns {boolean}
 */
function fnObject_valid(value) {
    if (!value)
        return false

    if (value === true) {
        return true
    }
    if (value > 0 || value < 0)
        return true
    if (value.length > 0)
        return true

    if (value + "" == "")
        return false
    if (parseInt(value) == 0)
        return false

    if (Object.keys(value).length == 0)
        return false

    return true
}


/**
 * 取得对象的第一个属性值
 * @param {Object} obj
 * @returns {*|null}
 */
function fnObject_current(obj) {
    for (let objKey in obj) {
        return obj[objKey]
    }
    return null;
}
