//================================================================================
//说明：JSON列表及配置文件操作
//================================================================================


/**
 * 取得JSON列表文件的列表数据
 * @param {string} jsonFile
 * @param {Object} where
 * @param {string} order
 * @returns []
 */
function fnJson_list(jsonFile, where=null, order="") {
    let result = JsaJson.list(jsonFile, where, order)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 取得JSON列表文件的单条数据
 * @param {string} jsonFile
 * @param {Object} where
 * @param {string} order
 * @returns {Object}
 */
function fnJson_listInfo(jsonFile, where=null, order="") {
    let result = JsaJson.listInfo(jsonFile, where, order)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * JSON列表文件 插入一条数据
 * @param {string} jsonFile
 * @param {Object} cn
 * @returns {number}
 */
function fnJson_listInsert(jsonFile, cn) {
    let result = JsaJson.listInsert(jsonFile, cn)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 更新数据 取得JSON列表文件的一条数据
 * @param {string} jsonFile
 * @param {Object} cn
 * @param {Object} where
 * @returns {number}
 */
function fnJson_listUpdate(jsonFile, cn, where) {
    let result = JsaJson.listUpdate(jsonFile, cn, where)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 删除数据
 * @param {string} jsonFile
 * @param {Object} where
 * @returns {number}
 */
function fnJson_listDelete(jsonFile,  where) {
    let result = JsaJson.listDelete(jsonFile,  where)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 取得JSON列表文件的分页
 * @param {string} jsonfile
 * @param {Object} columns
 * @param {string} where
 * @param {string} order
 * @param {number} pageindex
 * @param {number} pagesize
 * @returns {*[]}
 */
function fnJson_listPage(jsonfile, columns, where=null, order="", pageindex=1, pagesize=10) {
    let result = JsaJson.listPage(jsonfile, columns, where, order, pageindex, pagesize)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 取得json文件配置信息
 * @param {string} jsonfile
 * @param {string} key
 * @returns {{}}
 */
function fnJson_config(jsonfile, key="") {
    let result = JsaJson.config(jsonfile, key)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}


/**
 * 更新json文件配置数据
 * @param {string} jsonfile
 * @param {string} key
 * @param {*} value
 * @returns {number}
 */
function fnJson_configUpdate(jsonfile, key, value) {
    let result = JsaJson.configUpdate(jsonfile, key, value)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}

/**
 * 删除json文件的配置信息
 * @param {string} jsonfile
 * @param {string} key
 * @returns {number}
 */
function fnJson_configDelete(jsonfile, key) {
    let result = JsaJson.configDelete(jsonfile, key)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}




