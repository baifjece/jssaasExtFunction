//================================================================================
//说明：随机数操作
//================================================================================


/**
 * 取得随机数
 * @param {number} min 包含最小值
 * @param {number} max 不包含最大值
 * @returns {number}
 */
function fnRand_int(min, max) {
    if (min < 0 || max < 0) {
        return 0;
    }

    if(!Number.isInteger(min)){
        min=Math.floor(min);
    }
    if(!Number.isInteger(max)){
        max=Math.floor(max);
    }

    if( min>max){
        return  min;
    }
    return Math.floor(Math.random() * (max-min)) + min;
}

/**
 * 取得随机数
 * @param {number} min 包含最小值
 * @param {number} max 不包含最大值
 * @returns {*|number}
 */
function fnRand_float(min, max) {
    if (min < 0 || max < 0) {
        return 0;
    }

    if( min>max){
        return  min;
    }

    return  Math.random() * (max-min) + min;
}



