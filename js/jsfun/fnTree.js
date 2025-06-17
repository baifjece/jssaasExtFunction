//================================================================================
//说明：线程操作
//================================================================================


/**
 * 将数组对象转换成树形结构，父类为空,"",0
 * @param {Array}list
 * @param {string|undefined}idKey
 * @param {string|undefined}parentIdKey
 * @param {string|undefined}childrenKey
 * @returns {{}}}
 */
function fnTree_build(list, idKey = 'id', parentIdKey = 'parentId', childrenKey = 'children') {
    let result = JsaTree.build(list, idKey, parentIdKey, childrenKey);
    if (result.code < 0) {
        throw (result.msg)
    }
    return result.data;
}




