//================================================================================
//说明：时间操作
//================================================================================

/**
 * DEMO函数
 * @param {Array}items
 * @returns {*[]}
 */
function fnDemo_Init(items) {
    let result = _ext_Demo_Init(items);
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


