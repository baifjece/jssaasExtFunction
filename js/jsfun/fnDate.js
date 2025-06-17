//================================================================================
//说明：时间操作
//================================================================================

/**
 * 取得系统时间戳
 * @param {Date} dateValue 默认为now 时间字符串|Date，时间字符串：2000-01-01 或2000-01-01 01:01:01
 * @returns {  number}
 */
function fnDate_timestamp(dateValue = undefined) {
    let result = JsaDate.timestamp(dateValue)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得系统时间戳 毫秒
 * @returns {  number}
 */
function fnDate_timestampMilli() {
    let result = JsaDate.timestampMilli()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得系统时间戳 微秒秒
 * @returns {  number}
 */
function fnDate_timestampMicro() {
    let result = JsaDate.timestampMicro()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得时间戳的时间格式化时间值
 * @param {string} format 支持的字符：0.YmdHhis#_年月日时分秒: -\/，为空默认为：Y-m-d H:i:s 格式：2000-01-01 00:00:00
 * @returns {string}
 */
function fnDate_now(format = "Y-m-d H:i:s") {
    let result = JsaDate.format(format)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得时间戳的时间格式化时间值
 * @param {string} format 支持的字符：0.YmdHhis#_年月日时分秒: -\/，为空默认为：Y-m-d H:i:s 格式：2000-01-01 00:00:00
 * @param {number|string|Date} ts 时间戳，为空默认为当前时间
 * @returns {string}
 */
function fnDate_format(format = "Y-m-d H:i:s", ts = undefined) {
    let result = JsaDate.format(format, ts)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得两个时间的天数时间差
 * @param {string|number| Date} date1
 * @param {string|number| Date} date2
 * @param resultType 默认（ceil）向上取整，floor：向下取整，其他为小数点数值
 * @returns {number}
 */
function fnDate_days(date1, date2, resultType = "ceil") {
    // 创建 Date 对象（如果输入不是 Date 对象，需要先转换成 Date 对象）
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    // console.log("fnDate_days",d1,d2)
    // 确保 d1 是较早的日期，d2 是较晚的日期
    const earlierDate = d1 < d2 ? d1 : d2;
    const laterDate = d1 < d2 ? d2 : d1;

    // console.log("fnDate_days",earlierDate,laterDate)
    // 计算两个日期之间的毫秒数
    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const diffInMilliseconds = laterDate - earlierDate;

    // 将毫秒数转换为天数
    let diffInDays = 0;
    if (resultType == "ceil") {
        diffInDays = Math.ceil(diffInMilliseconds / millisecondsPerDay);
    } else if (resultType == "floor") {
        diffInDays = Math.floor(diffInMilliseconds / millisecondsPerDay);
    } else {
        diffInDays = diffInMilliseconds / millisecondsPerDay;
    }

    return diffInDays;
}

/**
 *
 * @param Second 过后秒数，
 * @param {string|number| Date} date 为空默认为当前时间
 * @returns {Date}
 */
function fnDate_After(Second, date = "") {
    let currentDate = new Date(date);
    let sevenDaysLater = new Date(currentDate.getTime() + Second * 1000);
    return sevenDaysLater;
}

/**
 * Compare将时间t与u进行比较。如果t在u之前，则返回-1； 如果t在u之后，它返回+1；如果它们相同，则返回0。
 * @param t {Date} 时间1
 * @param u {Date} 时间2
 * @returns  number
 */
function fnDate_compare(t, u) {
    let result = JsaDate.compare(t, u)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 增加或减少时间
 * // AddDate返回增加了给出的年份、月份和天数的时间点Time。例如，时间点January 1, 2011调用AddDate(-1, 2, 3)会返回March 4, 2010。
 * // AddDate会将结果规范化，类似Date函数的做法。因此，举个例子，给时间点October 31添加一个月，会生成时间点December 1。（从时间点November 31规范化而来）
 * @param {Date} t 变动的时间
 * @param {number} years 变动的年数
 * @param {number} months 变动的月数
 * @param {number} days 变动的天数
 * @returns {{}}
 */
function fnDate_addDate(t, years = 0, months = 0, days = 0) {
    let result = JsaDate.addDate(t, years, months, days)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * Add返回时间点t+d秒。
 * @param {Date} t
 * @param {number} seconds
 * @returns {{}}
 */
function fnDate_add(t, seconds = 0) {
    let result = JsaDate.add(t, seconds)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 返回一个时间段t-u。如果结果超出了Duration可以表示的最大值/最小值，将返回最大值/最小值。autoCompare:自动对比时间。
 * @param {Date} t 时间1
 * @param {Date} u 时间2
 * @param {boolean} utoCompare 是否自动调换t/u,确保时间1比时间2大
 * @param {number} dataType 0:默认，1：小时，2：分钟，3：秒。 0返回时间段采用"72h3m0.5s"格式的字符串表示。最前面可以有符号，数字+单位为一个单元，开始部分的0值单元会被省略；如果时间段<1s，会使用"ms"、"us"、"ns"来保证第一个单元的数字不是0；如果时间段为0，会返回"0"。
 * @returns   string|number
 */
function fnDate_sub(t, u, autoCompare = false, dataType = 0) {
    let result = JsaDate.sub(t, u, autoCompare, dataType)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 返回一个时间段now-t。如果结果超出了Duration可以表示的最大值/最小值，将返回最大值/最小值。
 * @param {Date} t 时间1,小于当前时间
 * @returns string
 */
function fnDate_since(t) {
    let result = JsaDate.since(t)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 取得UTC时间值
 * @returns {Date}
 */
function fnDate_utc() {
    let result = JsaDate.utc()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得UTC时间字符串值
 * @param format
 * @returns {string}
 */
function fnDate_utcString(format=undefined) {
    let result = JsaDate.utcString(format)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}