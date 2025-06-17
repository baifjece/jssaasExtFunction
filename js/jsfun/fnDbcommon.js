//================================================================================
//说明：多数据库和单数据库 单数据库操作公用函数
//================================================================================

/**
 * 数据库字段默认过滤字段名，这些字段不参与数据库操作
 * @type {string[]}
 */
function fnDb_excludeColumns() {
    return [
        "timestamp",// 时间戳
        "sign",//签名
        "logintoken"//登陆token
    ];
}

/**
 * 处理WHERE条件
 * @param {Object} where
 * @returns {{err: string, wherestr: string, wherepara: *[]}|{err: *, wherestr: string, wherepara: *[]}}
 */
function fnDbcommon_dealWherePara(where) {
    if (!where) {
        return {"wherestr": "", "wherepara": [], "err": ""}
    }
    if (where != null && !(where instanceof Object)) {
        return {"wherestr": "", "wherepara": [], "err": ""}
    }

    if (Array.isArray(where) || where.length == 0) {
        return {"wherestr": "", "wherepara": [], "err": ""}
    }

    let whereStr = JSON.stringify(where)
    // console.log(where,typeof where)
    if (whereStr) {
        if (whereStr.indexOf("{NOW}") >= 0) {
            let t = fnDate_now()
            whereStr = whereStr.replaceAll("{NOW}", t+"")
        }

        where = JSON.parse(whereStr)
    }


    let wherestr = "";
    let wherePara = [];

    for (let key in where) {
        let value = where[key];
        let tmp = key.split("|");
        if (tmp.length == 1) {
            wherestr += " and " + key + "=? ";
            wherePara.push(value);
        } else if (tmp.length == 2) {
            //	type := "";
            switch (tmp[1]) {
                //比较运算符
                case "<>":
                case  "!=":
                case ">":
                case  ">=":
                case "<":
                case  "<=":
                    wherestr += " and " + tmp[0] + tmp[1] + "?";
                    wherePara.push(value);
                    break;
                //like
                case "like":
                    wherestr += " and " + tmp[0] + " like ?"
                    wherePara.push(value)
                    break;
                //in 、 not in
                case "in":
                case "notin":
                    if (tmp[1] == "notin") {
                        tmp[1] = "not in"
                    }
                    if(!Array.isArray(value)){
                        value=value.split(",");
                    }
                    if (Array.isArray(value)) {
                        wherestr += " and " + tmp[0] + " " + tmp[1] + "("
                        for (let k = 0; k < value.length; k++) {
                            if (k > 0) {
                                wherestr += ","
                            }
                            wherestr += "?"
                            wherePara.push(value[k])
                        }
                        wherestr += ")"
                    } else {
                        // wherestr += " and " + tmp[0] + " " + tmp[1] + "(?)"
                        // wherePara.push(value)
                    }
                    break;
                case "or":
                    if (Array.isArray(value)) {
                        let orStr = "";
                        for (let j = 0; j < value.length; j++) {

                            //判断为对象
                            if (value[j] instanceof Object) {
                                let orResult = fnDbcommon_dealWherePara(value[j]);
                                let orWherestr = orResult["wherestr"];
                                let orWherepara = orResult["wherepara"];
                                let orErr = orResult["err"];
                                if (orErr.length > 0) {
                                    return {"wherestr": "", "wherepara": [], "err": orErr}
                                }
                                if (orStr.length > 0) {
                                    orStr += " or ";
                                }
                                orStr += "(" + orWherestr.replace("and", "") + ")";
                                for (let k = 0; k < orWherepara.length; k++) {
                                    wherePara.push(orWherepara[k]);
                                }
                            }
                        }
                        wherestr += " and (" + orStr + ")"
                    } else {
                        return {"wherestr": "", "wherepara": [], "err": "or条件语句必须时数组结构"}
                    }
                    break;
                case "code":
                    wherestr += " and " + tmp[0] + " " + value
                    break;
                default:
                    return {"wherestr": "", "wherepara": [], "err": "未知类型数据！" + tmp[1]}
            }
        }

    }

    return {"wherestr": wherestr, "wherepara": wherePara, "err": ""}

}

/**
 * 处理列参数返回列和参数数据
 * @param {Object} cn 列对象
 * @param {boolean} isadd 是否新增
 * @param {boolean} isMssqlGetInsertId 是否mssql取得新增ID
 * @returns {{cnpara: *[], cn: string}}
 */
function fnDbcommon_dealColuParaReturnColu(cn, isadd,isMssqlGetInsertId=false) {

    let colu = "";
    let coluPara = [];
    let arrCn = [];
    let arrCnValue = [];
    for (let key in cn) {
        //包含｜的列，不传参
        let tmpCn = key.split("|");
        if (tmpCn[0] == "") {
            arrCn.push("列名" + key + "有误")
        } else if (tmpCn.length == 1) {
            arrCn.push(key);
            arrCnValue.push("?")
            coluPara.push(cn[key]);
        } else {
            arrCn.push(tmpCn[0]);
            arrCnValue.push(cn[key])
        }
    }

    if (isadd) {
        colu = "(";
        for (let i = 0; i < arrCn.length; i++) {
            if (i > 0) {
                colu += ",";
            }
            colu += arrCn[i];
        }
        //mssql数据库,取得新增ID值，需要特殊处理，默认自增列为pkid，如果无法默认，需要自行解决
        if(isMssqlGetInsertId){
            colu += ") OUTPUT INSERTED.pkid VALUES (";
        }else {
            colu += ") VALUES (";
        }
        for (let i = 0; i < arrCnValue.length; i++) {
            if (i > 0) {
                colu += ",";
            }
            colu += arrCnValue[i];
        }
        colu += ")";
    } else {
        for (let i = 0; i < arrCn.length; i++) {
            if (i > 0) {
                colu += ",";
            }
            colu += arrCn[i] + "=" + arrCnValue[i];
        }

    }

    return {"cn": colu, "cnpara": coluPara}
}

