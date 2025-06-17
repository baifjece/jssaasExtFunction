//================================================================================
//说明：多数据库模式的数据库操作文件
//================================================================================

/**
 * 关闭指定数据库连接。该方法提供给sqlite内存模式下使用，其他模式下会自己关闭连接
 * @returns {boolean}
 */
function fnDb_close() {
    let result = JsaDB.close()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 取得当前请求的数据库类型
 * @returns {string}
 */
function fnDb_dbType() {
    let result = JsaDB.dbType()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 取得当前请求的数据库连接配置
 * @returns {{MssqlPassword: string, MysqlLoginpwd: string,DbType: string, MysqlServer: string, MysqlDbname: string,SqliteDataSourceName: string, MysqlLoginname: string, TableNamePrefix: string,TableNamePrefixSplit: string, MssqlUserid: string, MssqlEncrypt: string, SqliteDriverName: string, MysqlPort: string, MssqlServer: string, MssqlDatabase: string, MssqlPort: string}}
 */
function fnDb_connConfig() {
    let result = JsaDB.connConfig()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 分页数据
 * @param {string} tablename 表名
 * @param {string} cn 列名
 * @param {Object} where WHERE条件 ，对象类型
 * @param {string} order 排序
 * @param {number} pagesize 页条数
 * @param {number} pageindex 页索引
 * @returns {[]}
 */
function fnDb_page(tablename, cn, where, order, pagesize, pageindex) {
    if (!pagesize) {
        pagesize = 10
    }
    if (!pageindex) {
        pageindex = 1
    }

    return _fnDb_list(tablename, cn, where, order, pagesize, pageindex)
}

/**
 * 分页数据
 * @param {string} tablename 表名
 * @param {string} cn 列名
 * @param {Object} where WHERE条件 ，对象类型
 * @param {string} order 排序
 * @param {number} pagesize 页条数
 * @param {number} pageindex 页索引
 * @returns {{pagecount: number, num: number, list: []}}
 */
function fnDb_pageCount(tablename, cn, where, order, pagesize, pageindex) {
    if (!pagesize) {
        pagesize = 10
    }
    if (!pageindex) {
        pageindex = 1
    }

    let result = _fnDb_list(tablename, cn, where, order, pagesize, pageindex)

    //需要取得总记录数
    let rc = _fnDb_list(tablename, "count(*) as countaa", where)
    let recCount = rc[0]["countaa"];
    return {
        "list": result,
        "num": recCount,
        "pageindex": pageindex,
        "pagesize": pagesize,
        "pagecount": Math.ceil(recCount / pagesize)
    }
}

/**
 * 取得查询列表
 * @param {string} tablename 表名
 * @param {Object} where 条件 WHERE条件 ，对象类型
 * @param {string} order 排序
 * @param {number} limit 排序
 * @returns {[]} 返回数组
 */
function fnDb_list(tablename, cn, where = null, order = "", limit = 0) {
    return _fnDb_list(tablename, cn, where, order, limit);
}

/**
 * 取得单条数据信息
 * @param {string} tablename 表名
 * @param {string} cn 列名
 * @param {Object} where 条件
 * @param {string} order 排序
 * @returns {null|*} 返回对象
 */
function fnDb_info(tablename, cn="*", where = null, order = "") {
    let result = _fnDb_list(tablename, cn, where, order, 1)
    if (result.length > 0) {
        return result[0];
    } else {
        return null;
    }

}

/**
 * 查询数据
 * @param {string} sql SQL语句
 * @param {Array} params 参数数组
 * @returns {[]}
 */
function fnDb_query(sql, params = null) {
    let result = JsaDB.query(sql, params)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 查询单条数据
 * @param {string} sql SQL语句
 * @param {Array} params 参数数组
 * @returns {null|*}
 */
function fnDb_queryRow(sql, params = null) {
    let result = JsaDB.query(sql, params)
    if (result.code < 0) {
        throw (result.msg)
    }
    if (result.data.length > 0) {
        return result.data[0]
    }

    return null;
}

/**
 * 插入数据，非自增列
 * @param {string} tablename 表名
 * @param {Object} cn  对象结构
 * @returns {number}
 */
function fnDb_insert(tablename, cn) {
    let sql = "INSERT INTO " + tablename
    let tmpResult = fnDbcommon_dealColuParaReturnColu(cn, true)
    let sqlcolu = tmpResult["cn"];
    let paraArr = tmpResult["cnpara"];
    sql += sqlcolu;

    let result = JsaDB.execute(sql, paraArr)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 插入数据，返回自增ID
 * @param {string} tablename 表名
 * @param {Object} cn  对象结构
 * @returns {number}
 */
function fnDb_insertReturnInsertID(tablename, cn) {
    let sql = "INSERT INTO " + tablename
    //取得数据库类型
    let dbtype = fnDb_dbType();
    let tmpResult = {};
    //mssql数据库，需要特殊处理
    if (dbtype == "mssql") {
        tmpResult = fnDbcommon_dealColuParaReturnColu(cn, true, true)
    } else {
        tmpResult = fnDbcommon_dealColuParaReturnColu(cn, true)
    }
    let sqlcolu = tmpResult["cn"];
    let paraArr = tmpResult["cnpara"];
    sql += sqlcolu;
    let result = JsaDB.executeReturnInsertID(sql, paraArr)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data

}

/**
 * 更新数据
 * @param {string} tablename
 * @param {Object} cn 对象结构
 * @param {Object} where 对象结构
 * @returns {number}
 */
function fnDb_update(tablename, cn, where) {
    if (!fnObject_valid(cn)) {
        throw ("更新数据不能为空")
    }
    if (!fnObject_valid(where)) {
        throw ("更新数据条件不能为空")
    }

    let sql = "update " + tablename + " set "
    let tmpResult = fnDbcommon_dealColuParaReturnColu(cn, false)
    let sqlcolu = tmpResult["cn"];
    let paraArr = tmpResult["cnpara"];
    sql += sqlcolu;
    //写入条件
    let tmpR = fnDbcommon_dealWherePara(where);
    let wherestr = tmpR["wherestr"];
    let wherepara = tmpR["wherepara"];
    let err = tmpR["err"];
    //fmt.Println(wherestr, wherepara, err)
    if (err.length > 0) {
        throw (err)
    }

    sql += " where 1=1 " + wherestr;
    for (let i = 0; i < wherepara.length; i++) {
        paraArr.push(wherepara[i]);
    }
    // console.log(sql, paraArr)
    let result = JsaDB.execute(sql, paraArr);
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 删除数据
 * @param {string} tablename
 * @param {Object} where 对象结构
 * @returns {number}
 */
function fnDb_delete(tablename, where) {
    if (!tablename || tablename.length == 0) {
        throw ("表名不能为空")
    }
    if (!fnObject_valid(where)) {
        throw ("条件不能为空")
    }

    let sql = "delete from " + tablename
    //写入条件
    let tmpR = fnDbcommon_dealWherePara(where);
    let wherestr = tmpR["wherestr"];
    let wherepara = tmpR["wherepara"];
    let err = tmpR["err"];
    //fmt.Println(wherestr, wherepara, err)
    if (err.length > 0) {
        throw (err);
    }

    sql += " where 1=1 " + wherestr
    let result = JsaDB.execute(sql, wherepara);
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 执行SQL语句
 * @param {string} sql
 * @param {Object} where 对象结构
 * @returns {number}
 */
function fnDb_execute(sql, params = null) {
    let result = JsaDB.execute(sql, params)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 取得当前请求事务数量
 * @returns {number}
 */
function fnDb_transactioncount() {
    let result = JsaDB.transactionCount();
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 事务开始
 * @returns {boolean}
 */
function fnDb_begin() {
    let result = JsaDB.transactionBegin()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 事务提交
 * @returns {boolean}
 */
function fnDb_commit() {
    let result = JsaDB.transactionCommit()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 事务回滚
 * @returns {boolean}
 */
function fnDb_rollback() {
    let result = JsaDB.transactionRollback()
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}

/**
 * 取得查询列表
 * @param {string} tablename 表名
 * @param {string} cn 条件 WHERE条件 ，对象类型
 * @param {Object} where 条件 WHERE条件 ，对象类型
 * @param {string} order 排序
 * @param {number} pagesize 页条数
 * @param {number} pageindex 页索引
 * @returns {[]}
 */
function _fnDb_list(tablename, cn, where = null, order = "", pagesize = 10, pageindex = 1) {

    if (!tablename || tablename.length == 0) {
        throw ("表名不能为空")
    }
    let limit = pagesize;
    let offset = (pageindex - 1) * pagesize;
    if (!cn) {
        cn = "*";
    }
    if (!order) {
        order = ""
    }
    let tmpR = fnDbcommon_dealWherePara(where);
    //console.log("WHERE",tmpR)
    let wherestr = tmpR["wherestr"];
    let wherepara = tmpR["wherepara"];
    let err = tmpR["err"];
    //fmt.Println(wherestr, wherepara, err)
    if (err.length > 0) {
        console.error(err, "{{sql}}")
        throw (err)
    }

    let sql = "select " + cn + " from " + tablename + " where 1=1 " + wherestr + " " + order
    //取得数据库类型
    let dbtype = fnDb_dbType();
    if (dbtype == null) {
        let msg = "无法找到数据库连接的配置信息";
        console.error(msg)
        fnJsa_exit(msg)
        return null;
    }

    if (!dbtype || dbtype == "mysql" || dbtype == "sqlite") {
        if (limit > 0) {
            sql += " limit " + limit;
        }
        if (offset > 0) {
            sql += " offset " + offset
        }
    } else if (dbtype == "mssql") {
        if (limit > 0 && !offset > 0) {
            sql = "select top " + limit + " " + cn + " from " + tablename + " where 1=1 " + wherestr + " " + order;
        } else if (limit > 0 && offset > 0) {
            sql += "offset " + offset + " rows fetch next " + limit + " rows only "
        }
    }

    let result = JsaDB.query(sql, wherepara)
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data
}


